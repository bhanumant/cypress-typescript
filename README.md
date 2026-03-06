# Cypress + TypeScript Automation Project

## Overview

This project contains end-to-end automation tests built using **Cypress with TypeScript**.
The project also integrates **ESLint for code quality** and **Prettier for consistent code formatting**.

---

## Tech Stack

* **Cypress** – End-to-End testing framework
* **TypeScript** – Typed JavaScript for better maintainability
* **ESLint** – Code quality and linting rules
* **Prettier** – Automatic code formatting

---

## Project Structure

```text
cypress-typescript/
│
├── cypress/
│   ├── e2e/                # Test files
│   ├── fixtures/           # Test data
│   ├── support/            # Custom commands and utilities
│
├── eslint.config.js        # ESLint configuration
├── .prettierrc             # Prettier configuration
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd cypress-typescript
```

Install dependencies:

```bash
npm install
```

---

## Running Cypress Tests

Open Cypress UI:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

---

## Code Formatting

This project uses **Prettier** for formatting.

Format the entire project:

```bash
npx prettier . --write
```

Example before formatting:

```javascript
describe("template spec", () => {
  it("passes", () => {
    
    
    
             cy.visit("https://example.cypress.io");
    console.log("hi");
  });
});
```

After formatting:

```javascript
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    console.log("hi");
  });
});
```

---

## Linting (Code Quality)

ESLint is used to detect potential problems in the code.

Run ESLint:

```bash
npx eslint .
```

Example lint error:

```bash
error  Unexpected console statement  no-console
```

Fix automatically:

```bash
npx eslint . --fix
```

---

## Example ESLint Rules

```bash
rules: {
  indent: ['error', 2],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  semi: ['error', 'always'],
  'no-console': 'error'
}
```

These rules enforce:

* 2 space indentation
* No extra empty lines
* Mandatory semicolons
* No console logs in production code

---

## Recommended VS Code Setup

Install extensions:

* ESLint
* Prettier

Enable auto formatting on save:

```bash
Settings → Editor: Format On Save
```

---

## Running Lint and Format Together

```bash
npx eslint . --fix
npx prettier . --write
```

---

## Continuous Integration

The project can be integrated with CI tools like:

* Jenkins
* GitHub Actions
* GitLab CI

Typical CI steps:

1. Install dependencies
2. Run ESLint
3. Run Cypress tests
4. Generate test reports

---

## Author

Automation QA Project using Cypress + TypeScript.
