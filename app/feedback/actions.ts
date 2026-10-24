"use server";

import { processForm } from "@/lib/forms/submit";
import type { FormState } from "@/lib/forms/types";
import { FEEDBACK_FIELDS, FEEDBACK_TYPE_FIELD } from "./form-fields";

export async function submitFeedback(_prev: FormState, formData: FormData): Promise<FormState> {
  return processForm(FEEDBACK_FIELDS, formData, {
    toEnv: ["FEEDBACK_FORM_TO", "JOIN_FORM_TO"],
    fromEnv: "JOIN_FORM_FROM",
    logTag: "[feedback]",
    subject: (v) => {
      const kind = v[FEEDBACK_TYPE_FIELD] === "complaint" ? "YouthLink complaint or concern" : "YouthLink feedback";
      return `${kind} – ${v["full-name"] || "anonymous"}`;
    },
    successMessage: "Thank you! Your message has been received.",
    genericError: "Something went wrong while sending your message. Please try again.",
  });
}
