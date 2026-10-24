/**
 * The Feedback and Complaints form, as data.
 *
 * The first field chooses between the two options; fields with `showWhen`
 * only appear (and are only validated) for the matching option.
 */

import type { FormField } from "@/lib/forms/types";

export const FEEDBACK_TYPE_FIELD = "type";

export const FEEDBACK_FIELDS: FormField[] = [
  {
    name: FEEDBACK_TYPE_FIELD,
    label: "What would you like to send us?",
    type: "choice-cards",
    required: true,
    full: true,
    options: [
      {
        value: "feedback",
        label: "Feedback",
        description: "Suggestions for improving the website, public experience, activities, projects or community journey.",
      },
      {
        value: "complaint",
        label: "Complaint or concern",
        description:
          "A structured way to report a concern related to public communication, access, behaviour or an experience with a YouthLink group, project or activity.",
      },
    ],
  },
  { name: "full-name", label: "Full name", type: "text", required: true, placeholder: "Enter your full name", maxLength: 120 },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "Enter email address", maxLength: 256 },
  { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "Enter phone number", maxLength: 40 },

  // Feedback
  {
    name: "feedback-area",
    label: "What is your feedback about?",
    type: "select",
    required: true,
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "feedback" },
    options: [
      { value: "", label: "Select an area" },
      { value: "website", label: "The website" },
      { value: "public-experience", label: "Public experience" },
      { value: "activities", label: "Activities" },
      { value: "projects", label: "Projects" },
      { value: "community-journey", label: "Community journey" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "feedback-message",
    label: "Your feedback",
    type: "textarea",
    required: true,
    full: true,
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "feedback" },
    placeholder: "Tell us what is working well and what we could improve...",
    maxLength: 3000,
  },

  // Complaint or concern
  {
    name: "complaint-about",
    label: "What is your concern related to?",
    type: "select",
    required: true,
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "complaint" },
    options: [
      { value: "", label: "Select an option" },
      { value: "communication", label: "Public communication" },
      { value: "access", label: "Access" },
      { value: "behaviour", label: "Behaviour" },
      { value: "experience", label: "An experience with a YouthLink group, project or activity" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "complaint-group",
    label: "Which group, project or activity?",
    type: "text",
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "complaint" },
    placeholder: "If it applies, name the group, project or activity",
    maxLength: 200,
  },
  {
    name: "complaint-when",
    label: "When did this happen?",
    type: "text",
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "complaint" },
    placeholder: "Date or approximate time",
    maxLength: 120,
  },
  {
    name: "complaint-details",
    label: "What happened?",
    type: "textarea",
    required: true,
    full: true,
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "complaint" },
    placeholder: "Describe what happened, who was involved (if you are comfortable sharing) and how it affected you...",
    maxLength: 4000,
  },
  {
    name: "complaint-outcome",
    label: "What outcome would you like?",
    type: "textarea",
    full: true,
    showWhen: { field: FEEDBACK_TYPE_FIELD, equals: "complaint" },
    placeholder: "Tell us what would help resolve this for you...",
    maxLength: 2000,
  },

  {
    name: "consent",
    label: "I understand that my details are stored securely and used only to handle this submission.",
    type: "checkbox",
    required: true,
    full: true,
  },
];
