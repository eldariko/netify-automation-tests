# Implementation Tasks: Contact Form Automation

1. Setup: Project tooling
   - id: setup-playwright
   - title: Installing Playwright and configuring test runner
   - description: Add @playwright/test as a devDependency, run `npx playwright install` to provision browsers, and add a package.json script (e.g., `test:e2e`) to run Playwright tests.

2. Create test skeleton
   - id: create-test-skeleton
   - title: Create contact-form.spec.js test file
   - description: Add a test file at `specs/001-contact-form-automation/tests/contact-form.spec.js` with Playwright Test structure (describe/test or test('...')). Use modern JS and async/await.

3. Implement form fill
   - id: implement-form-fill
   - title: Implement field locators and input
   - description: Use Playwright locators (page.getByLabel/getByRole) to find and fill Name, Email, Phone, Company, Website fields with inline realistic data.

4. Implement dropdown selection
   - id: implement-dropdown
   - title: Select "51-500" option
   - description: Prefer `locator.selectOption({ label: '51-500' })` for native <select>. If the control is custom, use robust role/label/text locators.

5. Screenshot and submit
   - id: screenshot-and-submit
   - title: Capture pre-submit screenshot and submit the form
   - description: Capture `pre-submit-form.png` after inputs are populated, then click the "Request a call back" button and wait for navigation or Thank You content.

6. Assertions and logging
   - id: assertions
   - title: Verify Thank You page and console log
   - description: Assert the presence of Thank You page content or URL; write a console.log confirmation message.

7. CI integration
   - id: ci-integration
   - title: Add CI step to run Playwright tests
   - description: Ensure the project's CI runs Playwright tests (install Node version >=20, run `npx playwright install`, run tests). Include artifacts upload for screenshots where supported.

8. Documentation and PR
   - id: docs-and-pr
   - title: Open PR with tests and link to plan
   - description: Include a description of changes, link to the feature spec and plan, and ensure at least one reviewer from the automation team. Verify CI passes before merging.


Notes:
- Mark each task `in_progress`/`done` as you work. Keep each task focused and small — tests should be reviewable in isolation.
