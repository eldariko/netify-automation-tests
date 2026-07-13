const { test, expect } = require('@playwright/test');

test('Contact Form Automation', async ({ page }) => {
  // 1. Navigate directly to https://test.netlify.app/
  await page.goto('https://test.netlify.app/');

  // 2. Locate and fill in the input fields with realistic mock data
  // Using getByLabel as it's the most robust way if labels are present
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john.doe@example.com');
  await page.getByLabel('Phone').fill('1234567890');
  await page.getByLabel('Company').fill('Automation Corp');
  await page.getByLabel('Website').fill('https://automation-corp.com');

  // 3. Locate the "Number of Employees" dropdown menu and change its selection to "51-500"
  // Assuming it's a native select or has a label
  const employeesDropdown = page.getByLabel('Number of Employees');
  await employeesDropdown.selectOption({ label: '51-500' });

  // 4. Capture a full-page screenshot of the browser state right before submitting the form.
  // Save the screenshot file as pre-submit-form.png
  const screenshotPath = 'pre-submit-form.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // 5. Click the "Request a call back" button to submit the form.
  // 6. Wait for the navigation to the "Thank You" page to complete successfully.
  await Promise.all([
    page.waitForURL(/.*thank-you.*/), // Adjusting based on common patterns if exact URL isn't known
    page.getByRole('button', { name: 'Request a call back' }).click(),
  ]);

  // 7. Write a confirmation message to the console.log
  console.log('Thank You page was reached successfully.');

  // Final assertion to ensure we are on the right page
  await expect(page).toHaveURL(/.*thank-you.*/);
  await expect(page.getByText(/Thank You/i)).toBeVisible();
});