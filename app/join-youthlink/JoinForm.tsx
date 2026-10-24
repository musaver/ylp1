"use client";

import { useActionState, useEffect, useState } from "react";
import { Field, SubmitButton, fullWidth, honeypotStyle } from "@/components/forms/FormFields";
import { submitJoinApplication } from "./actions";
import { isFieldVisible } from "@/lib/forms/types";
import { INITIAL_JOIN_STATE, JOIN_FIELDS, JOIN_INTENT_FIELD, JOIN_INTENT_INITIATIVE } from "./form-fields";

export default function JoinForm() {
  const [state, formAction] = useActionState(submitJoinApplication, INITIAL_JOIN_STATE);
  const [intent, setIntent] = useState("");
  const [loadedAt, setLoadedAt] = useState("");
  useEffect(() => {
    setLoadedAt(String(Date.now()));
    // The homepage "Bring an Initiative" button links here with ?intent=initiative.
    if (new URLSearchParams(window.location.search).get("intent") === JOIN_INTENT_INITIATIVE) setIntent(JOIN_INTENT_INITIATIVE);
  }, []);

  if (state.ok) {
    const isInitiative = intent === JOIN_INTENT_INITIATIVE;
    return (
      <div className="contact-form-block">
        <div className="success-message" role="status" aria-live="polite" style={{ display: "block" }}>
          <div style={{ fontSize: "1.25em", fontWeight: 600, marginBottom: "0.5em" }}>
            {isInitiative ? "Thank you! Your initiative has been received." : "Thank you! Your application has been received."}
          </div>
          <div>The YouthLink team will review it and get back to you by email. You do not need to submit it again.</div>
        </div>
      </div>
    );
  }

  const visibleFields = JOIN_FIELDS.filter((f) => isFieldVisible(f, { [JOIN_INTENT_FIELD]: intent }));

  return (
    <div className="contact-form-block">
      <form id="join-youthlink-form" name="join-youthlink-form" action={formAction} className="contact-form" noValidate={false}>
        {state.message && (
          <div className="error-message" role="alert" style={{ ...fullWidth, display: "block" }}>
            <div>{state.message}</div>
          </div>
        )}

        {visibleFields.map((field) =>
          field.name === JOIN_INTENT_FIELD ? (
            <Field key={field.name} field={field} idPrefix="join" error={state.errors?.[field.name]} value={intent} onChange={setIntent} />
          ) : (
            <Field key={field.name} field={field} idPrefix="join" error={state.errors?.[field.name]} />
          ),
        )}

        {/* Spam protection: honeypot (hidden from people) and time-on-page. */}
        <div style={honeypotStyle} aria-hidden="true">
          <label htmlFor="join-website">Website</label>
          <input id="join-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="_t" value={loadedAt} />

        <p className="contact-details-paragraph" style={{ ...fullWidth, fontSize: "0.9em", opacity: 0.85 }}>
          <strong>Privacy notice:</strong> the details you share here are used only to process your application to YouthLink.
          They are stored securely, seen only by authorised YouthLink personnel, and are not shared with anyone else.
        </p>

        <SubmitButton label="Submit application" />
      </form>
    </div>
  );
}
