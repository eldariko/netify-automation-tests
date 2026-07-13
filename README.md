# Netify Automation Tests

Playwright-based end-to-end automation for testing the Netify contact form.

## Project Structure
- `tests/`: Contains Playwright test scripts.
  - `contact-form.spec.js`: Main test for the contact form automation.

## Getting Started

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm

### Installation
```bash
npm install
npx playwright install chromium
```

### Running Tests
To run all tests:
```bash
npm run test:e2e
```

To run with UI mode:
```bash
npx playwright test --ui
```

## Test Recording

<video src="./test-recording.webm" width="800" controls></video>

## Features Implemented
- Automatic form filling with mock data (Name, Email, Phone, Company, Website).
- Dropdown selection logic.
- Automated full-page screenshot capture (`pre-submit-form.png`) before submission.
- Navigation verification to the "Thank You" page.
- CI/CD ready via GitHub Actions.