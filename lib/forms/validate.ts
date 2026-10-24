import type { FormField } from "./types";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function str(formData: FormData, name: string) {
  const v = formData.get(name);
  return typeof v === "string" ? v.trim() : "";
}

export function validateField(field: FormField, raw: string): string | null {
  if (field.type === "checkbox") {
    if (field.required && raw !== "on") return "Please tick this box to continue.";
    return null;
  }
  if (!raw) return field.required ? "This field is required." : null;
  if (field.maxLength && raw.length > field.maxLength) return `Please keep this under ${field.maxLength} characters.`;
  if (field.type === "email" && !EMAIL_RE.test(raw)) return "Please enter a valid email address.";
  if (field.type === "number") {
    const n = Number(raw);
    if (!Number.isFinite(n)) return "Please enter a number.";
    if (field.min !== undefined && n < field.min) return `Must be at least ${field.min}.`;
    if (field.max !== undefined && n > field.max) return `Must be at most ${field.max}.`;
  }
  if ((field.type === "select" || field.type === "choice-cards") && !field.options?.some((o) => o.value !== "" && o.value === raw)) {
    return "Please choose one of the listed options.";
  }
  return null;
}

export function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
