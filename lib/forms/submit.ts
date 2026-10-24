import { Resend } from "resend";
import { isFieldVisible, type FormField, type FormState } from "./types";
import { EMAIL_RE, escapeHtml, str, validateField } from "./validate";

const MIN_FILL_MS = 3000;

export type ProcessFormOptions = {
  /** Env var(s) holding the comma separated recipients; the first one that is set wins. */
  toEnv: string[];
  /** Env var holding the verified sender. */
  fromEnv: string;
  /** Prefix for console errors, e.g. "[join-youthlink]". */
  logTag: string;
  /** Email heading and subject, computed from the submitted values. */
  subject: (values: Record<string, string>) => string;
  /** Message shown to the person on success. */
  successMessage: string;
  /** Message shown to the person on any failure. */
  genericError: string;
};

/**
 * Shared server-side handling for a config-driven form: spam checks,
 * validation driven by the field list, and delivery by email via Resend.
 */
export async function processForm(fields: FormField[], formData: FormData, opts: ProcessFormOptions): Promise<FormState> {
  const fail = (): FormState => ({ ok: false, message: opts.genericError });

  // Basic spam protection: honeypot field and minimum time on page.
  if (str(formData, "website") !== "") return fail();
  const loadedAt = Number(str(formData, "_t"));
  if (!Number.isFinite(loadedAt) || Date.now() - loadedAt < MIN_FILL_MS) return fail();

  const raw: Record<string, string> = {};
  for (const field of fields) raw[field.name] = str(formData, field.name);

  // Validation driven by the field config; hidden fields are ignored.
  const errors: Record<string, string> = {};
  const rows: { label: string; value: string }[] = [];
  for (const field of fields) {
    if (!isFieldVisible(field, raw)) continue;
    const value = raw[field.name];
    const err = validateField(field, value);
    if (err) errors[field.name] = err;
    let display = value;
    if (field.type === "checkbox") display = value === "on" ? "Yes" : "No";
    if (field.type === "select" || field.type === "choice-cards") {
      display = field.options?.find((o) => o.value === value)?.label ?? value;
    }
    rows.push({ label: field.label, value: display });
  }
  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, message: "Please check the highlighted fields and try again." };
  }

  const emailField = fields.find((f) => f.type === "email");
  const replyTo = emailField ? raw[emailField.name] : undefined;
  const subject = opts.subject(raw);
  const submittedAt = new Date().toISOString();

  const text = [subject, `Submitted at: ${submittedAt}`, ``, ...rows.map((r) => `${r.label}:\n${r.value || "(not provided)"}\n`)].join("\n");
  const html = `<h2>${escapeHtml(subject)}</h2><p><small>Submitted at ${submittedAt}</small></p>${rows
    .map((r) => `<p><strong>${escapeHtml(r.label)}</strong><br>${escapeHtml(r.value || "(not provided)").replace(/\n/g, "<br>")}</p>`)
    .join("")}`;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env[opts.fromEnv];
  const toRaw = opts.toEnv.map((k) => process.env[k]).find((v) => v && v.trim() !== "");
  const to = toRaw?.split(",").map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !from || !to || to.length === 0) {
    console.error(`${opts.logTag} Missing RESEND_API_KEY, ${opts.fromEnv} or ${opts.toEnv.join("/")}`);
    return fail();
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: replyTo && EMAIL_RE.test(replyTo) ? replyTo : undefined,
      subject,
      text,
      html,
    });
    if (error) {
      console.error(`${opts.logTag} Resend error`, error);
      return fail();
    }
  } catch (err) {
    console.error(`${opts.logTag} Failed to send`, err);
    return fail();
  }

  return { ok: true, message: opts.successMessage };
}
