# Quickstart: Contact Form Automation (Validation Guide)

## Prerequisites
- Node.js 20+ installed
- Git repository checked out at project root

## Install dependencies (one-time)
From the repository root:

```bash
# Install Playwright Test and browsers
npm install -D @playwright/test
npx playwright install --with-deps
```

(You may already have Playwright installed in the repo; the command above ensures browsers are available in CI/local.)

## Running the validation test
- Expected test path (feature): specs/001-contact-form-automation/tests/contact-form.spec.js

Run the test with Playwright Test (Chromium example):

```bash
npx playwright test specs/001-contact-form-automation/tests/contact-form.spec.js --project=chromium
```

## Expected outcomes
- Pre-submit screenshot saved as: `specs/001-contact-form-automation/pre-submit-form.png` (or the test artifact path documented in the test run)
- Console output contains: `Thank You page reached successfully` (or similar confirmation log)
- Playwright Test reports `1 passed` for the contact-form test

## Notes and troubleshooting
- The test avoids hard waits (page.waitForTimeout). If the AUT uses custom client-side navigation, ensure the test waits for either a URL change (`page.waitForURL`) or a stable DOM change (`page.getByText('Thank You')`).
- If the form uses a custom dropdown control rather than a native <select>, the test will use robust locators (getByLabel / getByRole / getByText) to find and select the desired option.
- Keep test code in modern JavaScript (async/await) and use Playwright locators (e.g., `page.getByLabel('Name')`) for robustness.
