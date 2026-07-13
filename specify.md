# Feature Specification: Contact Form Automation

## Objective
Create a simple Playwright automation script to fill out and submit the contact form on https://test.netlify.app/.

## Execution Flow
1. Navigate directly to `https://test.netlify.app/`.
2. Locate and fill in the following input fields with realistic mock data:
   * Name
   * Email
   * Phone
   * Company
   * Website
3. Bonus Task: Locate the "Number of Employees" dropdown menu and change its selection from the default "1-10" to "51-500".
4. Capture a full-page screenshot of the browser state right before submitting the form. Save the screenshot file as `pre-submit-form.png`.
5. Click the "Request a call back" button to submit the form.
6. Wait for the navigation to the "Thank You" page to complete successfully.
7. Write a confirmation message to the `console.log` stating that the Thank You page was reached successfully.

## Constraints & Assertions
* Handle any potential wait states gracefully. Do not use hardcoded timeouts (e.g., page.waitForTimeout).
* Ensure the screenshot is taken only after all form fields and the dropdown have been successfully populated.