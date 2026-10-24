"use client";

import { useActionState, useEffect, useState } from "react";
import { Field, SubmitButton, fullWidth, honeypotStyle } from "@/components/forms/FormFields";
import { INITIAL_FORM_STATE, isFieldVisible } from "@/lib/forms/types";
import { submitFeedback } from "./actions";
import { FEEDBACK_FIELDS, FEEDBACK_TYPE_FIELD } from "./form-fields";

export default function FeedbackForm() {
  const [state, formAction] = useActionState(submitFeedback, INITIAL_FORM_STATE);
  const [type, setType] = useState("");
  const [loadedAt, setLoadedAt] = useState("");
  useEffect(() => setLoadedAt(String(Date.now())), []);

  if (state.ok) {
    const isComplaint = type === "complaint";
    return (
      <div className="contact-form-block">
        <div className="success-message" role="status" aria-live="polite" style={{ display: "block" }}>
          <div style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "0.5em" }}>
            {isComplaint ? "Thank you. We have received your complaint." : "Thank you. We have received your feedback."}
          </div>
          <div>
            {isComplaint
              ? "A member of the YouthLink team will review it confidentially and contact you by email. You do not need to submit it again."
              : "The YouthLink team reads every piece of feedback. If a reply is needed, we will contact you by email."}
          </div>
        </div>
      </div>
    );
  }

  const values = { [FEEDBACK_TYPE_FIELD]: type };
  const visibleFields = FEEDBACK_FIELDS.filter((f) => isFieldVisible(f, values));

  return (
    <div className="contact-form-block">
      <form id="feedback-form" name="feedback-form" action={formAction} className="contact-form" noValidate={false}>
        {state.message && (
          <div className="error-message" role="alert" style={{ ...fullWidth, display: "block" }}>
            <div>{state.message}</div>
          </div>
        )}

        {visibleFields.map((field) =>
          field.name === FEEDBACK_TYPE_FIELD ? (
            <Field key={field.name} field={field} idPrefix="feedback" error={state.errors?.[field.name]} value={type} onChange={setType} />
          ) : (
            <Field key={field.name} field={field} idPrefix="feedback" error={state.errors?.[field.name]} />
          ),
        )}

        {/* Spam protection: honeypot (hidden from people) and time-on-page. */}
        <div style={honeypotStyle} aria-hidden="true">
          <label htmlFor="feedback-website">Website</label>
          <input id="feedback-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="_t" value={loadedAt} />

        <p className="contact-details-paragraph" style={{ ...fullWidth, fontSize: "0.9em", opacity: 0.85 }}>
          <strong>Privacy notice:</strong> what you share here is used only to handle your feedback or complaint. It is stored
          securely, seen only by authorised YouthLink personnel, and is not shared with anyone else. Complaints are treated
          confidentially.
        </p>

        <SubmitButton label={type === "complaint" ? "Submit complaint" : "Send feedback"} />
      </form>
    </div>
  );
}
