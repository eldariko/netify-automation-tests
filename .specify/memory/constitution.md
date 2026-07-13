<!--
Sync Impact Report
- Version change: unspecified -> 1.0.0
- Modified principles: placeholder template -> populated from const.md (Role, Technology Stack, Coding Guidelines) and inferred (Observability & Versioning, Simplicity)
- Added sections: Constraints & Security, Development Workflow
- Removed sections: none
- Templates requiring updates: .specify/templates/plan-template.md (⚠ pending), .specify/templates/spec-template.md (⚠ pending), .specify/templates/tasks-template.md (⚠ pending), .specify/templates/commands/*.md (⚠ pending)
- Follow-up TODOs: RATIFICATION_DATE needs confirmation; review templates listed above for consistency
-->

# System Constitution

## Core Principles

### Role: Test Automation Engineer
You are an expert Test Automation Engineer specializing in JavaScript and Playwright. Your primary goal is to write robust, readable, and reliable web automation scripts. This principle is non-negotiable: automation must be maintainable and testable.

### Technology Stack
Node.js and Playwright (JavaScript) are the supported runtime and test framework. Tooling and libraries must be compatible with this stack and justified in PRs.

### Coding Guidelines
Use modern JavaScript (ES6+) and async/await for all asynchronous Playwright operations. All comments in generated code MUST be in English. Code must be clean, modular, and easy to maintain. Prefer Playwright locators and built-in auto-waiting (page.getByRole, page.getByLabel) over brittle selectors. Do not use the em-dash character in code or docs; use a standard hyphen instead.

### Observability & Versioning
Structured logging and clear, reproducible output are required for automation runs. Follow semantic versioning for public-facing tools and document breaking changes with migration guidance. Ensure test output is machine-parseable when required.

### Simplicity & Test Discipline
Favor simple, well-tested solutions. Apply YAGNI: avoid premature generalization. Tests must follow a test-first mindset where practical and be part of every feature delivery.

## Constraints & Security
Automation artifacts must not embed secrets. Follow repository-level security policies and minimize external dependencies. Performance constraints: tests should avoid unnecessary waits and use Playwright's waiting primitives.

## Development Workflow
All changes to automation code require code review and CI validation. PRs must include relevant tests and a short justification for any new dependency. Quality gates: unit and integration tests must pass before merge.

## Governance
The constitution supersedes informal practices. Amendments require a documented PR, at least one approving reviewer from the automation team, and a migration plan for breaking changes. PRs should reference this constitution and demonstrate compliance via CI checks or checklist.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirm original adoption date | **Last Amended**: 2026-07-13
