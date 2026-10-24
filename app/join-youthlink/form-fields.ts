/**
 * The Join YouthLink application form, as data.
 *
 * This file is the single place to change when YouthLink supplies the final
 * approved questions. `JoinForm.tsx` renders whatever is listed here and
 * `actions.ts` validates and emails it, so neither needs to change.
 *
 * Shared field/state types live in `lib/forms/types.ts`.
 */

import type { FormField, FormState } from "@/lib/forms/types";

export type JoinField = FormField;
export type JoinState = FormState;
export { INITIAL_FORM_STATE as INITIAL_JOIN_STATE } from "@/lib/forms/types";

/** Name of the field that says whether the applicant joins as a member or brings an initiative. */
export const JOIN_INTENT_FIELD = "intent";
/** Option value for "Bring an initiative"; the homepage links to `/join-youthlink?intent=initiative`. */
export const JOIN_INTENT_INITIATIVE = "initiative";

export const JOIN_FIELDS: FormField[] = [
  {
    name: JOIN_INTENT_FIELD,
    label: "What brings you to YouthLink?",
    type: "choice-cards",
    required: true,
    full: true,
    options: [
      {
        value: "member",
        label: "Join as a member",
        description: "Learn, build skills, grow your network and contribute to YouthLink projects.",
      },
      {
        value: JOIN_INTENT_INITIATIVE,
        label: "Bring an initiative",
        description:
          "You have an initiative, project or idea that can serve the Ummah and society, and want to develop it with the right people, skills and support.",
      },
    ],
  },
  { name: "full-name", label: "Full name", type: "text", required: true, placeholder: "Enter your full name", maxLength: 120 },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "Enter email address", maxLength: 256 },
  { name: "phone", label: "Phone", type: "tel", placeholder: "Enter phone number", maxLength: 40 },
  { name: "age", label: "Age", type: "number", required: true, placeholder: "Your age", min: 10, max: 99 },
  { name: "city", label: "City / area", type: "text", required: true, placeholder: "Where are you based?", maxLength: 120 },
  {
    name: "initiative-details",
    label: "Tell us about your initiative",
    type: "textarea",
    required: true,
    full: true,
    showWhen: { field: JOIN_INTENT_FIELD, equals: JOIN_INTENT_INITIATIVE },
    placeholder: "What is the initiative, who is it for, what stage is it at, and what support or skills would help it grow?",
    maxLength: 3000,
  },
  {
    name: "heard-from",
    label: "How did you hear about YouthLink?",
    type: "select",
    options: [
      { value: "", label: "Select an option" },
      { value: "friend", label: "A friend or family member" },
      { value: "school", label: "School, college or university" },
      { value: "social", label: "Social media" },
      { value: "event", label: "An event or workshop" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "hours-per-week",
    label: "Hours per week you can commit",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select hours" },
      { value: "1-2", label: "1–2 hours" },
      { value: "3-5", label: "3–5 hours" },
      { value: "6-10", label: "6–10 hours" },
      { value: "10+", label: "More than 10 hours" },
    ],
  },
  {
    name: "why-join",
    label: "Why do you want to join YouthLink?",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Tell us what motivates you to join...",
    maxLength: 2000,
  },
  {
    name: "skills",
    label: "Skills or experience you bring",
    type: "textarea",
    full: true,
    placeholder: "Anything you already know or have done that could help...",
    maxLength: 2000,
  },
  {
    name: "goals",
    label: "What do you hope to learn, build or contribute?",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Be specific: what would you like to get out of YouthLink, and what will you put in?",
    maxLength: 2000,
  },
  {
    name: "consent",
    label: "I understand that my details are stored securely and used only to process my application.",
    type: "checkbox",
    required: true,
    full: true,
  },
];
