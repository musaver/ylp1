/**
 * Shared types for the config-driven forms (Join YouthLink, Feedback and
 * Complaints). A form is a list of `FormField`s; `components/forms/FormFields`
 * renders them and `lib/forms/submit` validates and emails them.
 */

export type FieldType = "text" | "email" | "tel" | "number" | "textarea" | "select" | "checkbox" | "choice-cards";

export type FormField = {
  /** Form field name; also the key used in validation errors. Letters, digits, dashes only. */
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  /** For `select` fields the first option is used as the empty prompt. For `choice-cards` each option is a card. */
  options?: { value: string; label: string; description?: string }[];
  maxLength?: number;
  /** Span both columns of the form grid (like the Message field on the contact page). */
  full?: boolean;
  /** For `number` fields. */
  min?: number;
  max?: number;
  /** Only show (and validate) this field when another field has the given value. */
  showWhen?: { field: string; equals: string };
};

/** Result of a submission, returned by the server action and rendered by the form. */
export type FormState = {
  ok: boolean;
  /** Top-level message shown above the form (errors) or in the confirmation. */
  message?: string;
  /** Per-field validation errors keyed by field name. */
  errors?: Record<string, string>;
};

export const INITIAL_FORM_STATE: FormState = { ok: false };

/** Whether a field is active given the current raw values of the form. */
export function isFieldVisible(field: FormField, values: Record<string, string>): boolean {
  if (!field.showWhen) return true;
  return values[field.showWhen.field] === field.showWhen.equals;
}
