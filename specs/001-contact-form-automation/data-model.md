# Data Model: Contact Form Automation

## Entity: ContactForm

- Name: ContactForm
- Description: Represents the set of input values that are populated and submitted by the automation script.

### Fields
- name (string) — User's full name. Validation: non-empty, sensible max length (e.g., 200 chars).
- email (string) — User email. Validation: non-empty, basic email format check (contains `@` and a domain).
- phone (string) — Phone number. Optional; when present, validate digits and common punctuation allowed.
- company (string) — Company name. Optional.
- website (string) — Website URL. Optional; if present, validate basic URL shape (contains a dot).
- number_of_employees (enum) — Dropdown selection. Allowed values: `1-10`, `11-50`, `51-500`, `501+`. Default on the form: `1-10`.

### Validation rules (for test assertions)
- Required fields for the test: name and email (per spec assumption). If the AUT enforces other required fields, the test may be adapted.
- Email should match a basic email regex for sanity checks, but the test should avoid brittle or strict validations that depend on application rules.

### State transitions (test-level)
- empty -> populated (after filling inputs and selecting dropdown)
- populated -> submitted (after clicking the "Request a call back" button)
- submitted -> thank_you (after navigation or DOM change indicating success page)

### Relationships
- None — this is a single-form artifact used only by the automation test.

## Notes
- This is not a persistent domain model; it is a test-level representation used to reason about input generation, validation expectations, and the final assertions the test will perform.
