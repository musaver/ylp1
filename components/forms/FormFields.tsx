"use client";

import { useFormStatus } from "react-dom";
import type { CSSProperties } from "react";
import type { FormField } from "@/lib/forms/types";

const STAR_ICON = "/690ed4943a93ad5efefde551/6914826f90c95ebc12d6275a_star.svg";
const ARROW_ICON = "/690ed4943a93ad5efefde551/692d79485670d310b3228f10_Arrow-right%20(8).svg";

export const fullWidth: CSSProperties = { gridColumn: "1 / -1" };
const fieldError: CSSProperties = { color: "#d64545", fontSize: "0.85em", marginTop: "0.4em" };
export const honeypotStyle: CSSProperties = { position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" };

const cardGrid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" };
const cardBase: CSSProperties = {
  display: "block",
  cursor: "pointer",
  padding: "20px 22px",
  borderRadius: "12px",
  border: "1px dashed var(--white-20, #fff3)",
  background: "rgba(255,255,255,0.03)",
  transition: "border-color .2s, background-color .2s",
};
const cardSelected: CSSProperties = { borderStyle: "solid", borderColor: "rgb(238,234,130)", background: "rgba(238,234,130,0.08)" };

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="contact-submit-button-wrapper" style={fullWidth}>
      <input
        type="submit"
        disabled={pending}
        style={{ backgroundColor: "rgb(238,234,130)" }}
        className="contact-submit-button w-button"
        value={pending ? "Please wait..." : label}
      />
      <div style={{ backgroundColor: "rgb(238,234,130)" }} className="contact-icon-wrapper">
        <div className="contact-icon-wrap">
          <img src={ARROW_ICON} loading="lazy" alt="" className="contact-button-icon" />
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  field: FormField;
  error?: string;
  /** Prefix for element ids, e.g. "join" → "join-email". */
  idPrefix: string;
  /** Current value, for controlled fields (`choice-cards`). */
  value?: string;
  onChange?: (value: string) => void;
};

export function Field({ field, error, idPrefix, value, onChange }: FieldProps) {
  const id = `${idPrefix}-${field.name}`;
  const inputClass = "contact-form-input w-input";
  const describedBy = error ? `${id}-error` : undefined;

  if (field.type === "choice-cards") {
    return (
      <div className="contact-input-wrap" style={fullWidth}>
        <div className="contact-form-label-wrap">
          <div id={`${id}-label`} className="contact-form-label">{field.label}</div>
          {field.required && <img src={STAR_ICON} loading="lazy" alt="required" className="contact-form-label-image" />}
        </div>
        <div role="radiogroup" aria-labelledby={`${id}-label`} aria-describedby={describedBy} style={cardGrid}>
          {field.options?.map((o) => {
            const selected = value === o.value;
            return (
              <label key={o.value} htmlFor={`${id}-${o.value}`} style={{ ...cardBase, ...(selected ? cardSelected : null) }}>
                <input
                  id={`${id}-${o.value}`}
                  type="radio"
                  name={field.name}
                  value={o.value}
                  required={field.required}
                  checked={selected}
                  onChange={() => onChange?.(o.value)}
                  style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
                />
                <div className="contact-form-label" style={{ fontWeight: 600, marginBottom: "0.4em" }}>{o.label}</div>
                {o.description && <div style={{ fontSize: "0.9em", opacity: 0.85, lineHeight: 1.5 }}>{o.description}</div>}
              </label>
            );
          })}
        </div>
        {error && <div id={`${id}-error`} style={fieldError}>{error}</div>}
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <div className="contact-input-wrap" style={fullWidth}>
        <label htmlFor={id} className="contact-form-label" style={{ display: "flex", gap: "0.75em", alignItems: "flex-start", cursor: "pointer" }}>
          <input id={id} name={field.name} type="checkbox" required={field.required} aria-describedby={describedBy} style={{ marginTop: "0.3em" }} />
          <span>
            {field.label}
            {field.required && <img src={STAR_ICON} loading="lazy" alt="required" className="contact-form-label-image" style={{ marginLeft: "0.4em" }} />}
          </span>
        </label>
        {error && <div id={`${id}-error`} style={fieldError}>{error}</div>}
      </div>
    );
  }

  let control;
  if (field.type === "textarea") {
    control = (
      <textarea id={id} name={field.name} required={field.required} maxLength={field.maxLength} placeholder={field.placeholder} aria-describedby={describedBy} rows={2} style={{ minHeight: 0, height: "auto" }} className={`${inputClass} textarea`} />
    );
  } else if (field.type === "select") {
    control = (
      <div className="contact-form-select-wrap">
        <select id={id} name={field.name} required={field.required} aria-describedby={describedBy} className="contact-form-select w-select" defaultValue="">
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
    );
  } else {
    control = (
      <input
        id={id}
        name={field.name}
        type={field.type}
        required={field.required}
        maxLength={field.maxLength}
        min={field.min}
        max={field.max}
        placeholder={field.placeholder}
        aria-describedby={describedBy}
        className={inputClass}
      />
    );
  }

  return (
    <div className="contact-input-wrap" style={field.full ? fullWidth : undefined}>
      <div className="contact-form-label-wrap">
        <label htmlFor={id} className="contact-form-label">{field.label}</label>
        {field.required && <img src={STAR_ICON} loading="lazy" alt="required" className="contact-form-label-image" />}
      </div>
      {control}
      {error && <div id={`${id}-error`} style={fieldError}>{error}</div>}
    </div>
  );
}
