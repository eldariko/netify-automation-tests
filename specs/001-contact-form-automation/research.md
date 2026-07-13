# Research: Contact Form Automation

Decision: Use Node.js 20 (ES2023) with @playwright/test as the test framework.

Rationale:
- The repository constitution mandates Node.js and Playwright as the supported stack. Node.js 20 is a modern LTS release (widely available in CI) and aligns with ES2023 features.

Alternatives considered:
- Node 18 (older LTS) — acceptable but less modern; chosen not to complicate CI with older runtimes.
- Node 22 — newer but may not be present in all CI images at time of writing.

---

Decision: Use Playwright Test (@playwright/test) and Playwright browsers.

Rationale:
- Playwright Test provides first-class auto-waiting, stable locator APIs (page.getByRole / page.getByLabel), built-in test runner features, and straightforward screenshot capture. The constitution explicitly lists Playwright as the supported automation framework.

Alternatives considered:
- Puppeteer or Selenium — heavier or less integrated for modern E2E testing; rejected because Playwright is the preferred stack.

---

Decision: Avoid adding external data-generation libraries for this single-feature test.

Rationale:
- Constitution favors minimizing external dependencies. Realistic mock data can be generated with small helper functions (or hardcoded realistic strings) without introducing a new dependency.

Alternatives considered:
- @faker-js/faker — useful for larger suites, but unnecessary here and increases maintenance.

---

Decision: Dropdown selection strategy — prefer locator.selectOption({ label: '51-500' }) or selecting by value on a native <select>. If the UI uses a custom dropdown (not a native <select>), fall back to interacting with the visible list item via robust locators (getByRole/getByLabel/getByText).

Rationale:
- selectOption is a declarative, robust API when a native select is present. For custom components, using accessibility-based locators reduces brittleness.

Alternatives considered:
- Clicking open/close UI flows and selecting by index — brittle and sensitive to UI changes.

---

Decision: Screenshot timing — capture a full-page screenshot after all fields are populated and any selectOption completes, immediately before submitting.

Rationale:
- Guarantees the screenshot reflects the final pre-submit state required by the spec.

Alternatives considered:
- Time-based waits (page.waitForTimeout) — explicitly disallowed by the spec and constitution.

---

Decision: Submission verification — use Playwright's navigation/wait helpers. Prefer:
- await Promise.all([page.waitForNavigation(), page.click("text=Request a call back")])
or
- await page.click(...); await page.waitForURL(/thank[- ]?you/i) / await page.getByText('Thank You')

Rationale:
- Ensures we assert page navigation or stable DOM change instead of relying on timing.

Alternatives considered:
- Observing network requests — possible but may be brittle across environments.

---

Consolidated recommendation:
Implement a single Playwright Test that:
1. navigates to https://test.netlify.app/
2. fills required fields with inline realistic values
3. selects "51-500" using selectOption or robust locators
4. captures a full-page screenshot saved as `pre-submit-form.png` in the feature artifacts directory
5. submits the form, waits for the Thank You page, and logs a confirmation message to console
6. keeps dependencies minimal and follows Playwright best practices (use async/await, locators, auto-waiting, no page.waitForTimeout)
