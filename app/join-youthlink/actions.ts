"use server";

import { processForm } from "@/lib/forms/submit";
import { JOIN_FIELDS, JOIN_INTENT_FIELD, JOIN_INTENT_INITIATIVE, type JoinState } from "./form-fields";

export async function submitJoinApplication(_prev: JoinState, formData: FormData): Promise<JoinState> {
  return processForm(JOIN_FIELDS, formData, {
    toEnv: ["JOIN_FORM_TO"],
    fromEnv: "JOIN_FORM_FROM",
    logTag: "[join-youthlink]",
    subject: (v) =>
      v[JOIN_INTENT_FIELD] === JOIN_INTENT_INITIATIVE
        ? `New YouthLink initiative – ${v["full-name"] || "applicant"}`
        : `New YouthLink application – ${v["full-name"] || "applicant"}`,
    successMessage: "Thank you! Your application has been received.",
    genericError: "Something went wrong while submitting your application. Please try again.",
  });
}
