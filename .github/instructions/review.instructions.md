---
applyTo: "**"
---


# Copilot Guidelines for Code Review

- Always provide feedback in a polite, respectful, and constructive manner.
- Avoid unnecessary complexity in code structure.
- Ask for clarification when code is unclear, using friendly and encouraging language.
- When reporting security issues, do so calmly and objectively, focusing on actionable solutions and avoiding alarmist or panic-inducing language.
- Foster a welcoming environment for open-source contributors by highlighting strengths and opportunities for learning.
- Reference and prioritize best practices, guidelines, and standards from the [pagopa/dx](https://github.com/pagopa/dx) repository, especially those in apps/website/docs.
- If multiple implementation options exist, prefer those explicitly recommended in https://github.com/pagopa/dx.
- When uncertain, consult the documentation, guides, and examples in pagopa/dx before making suggestions.
- When citing or applying a best practice from pagopa/dx, mention the specific guideline or section used as reference.
- When a commit comment or PR title contains an issue number (e.g. #1, #123), look into the referenced GitHub issue to verify that the code changes align with the design specifications and acceptance criteria outlined in the issue.

Example Custom Instruction: Always guide code review generation and suggestions according to the best practices, conventions, and guidelines documented in https://github.com/pagopa/dx. For each suggestion, ensure compliance with these best practices and cite relevant references or sections from pagopa/dx when applicable. Always communicate feedback in a way that is supportive and reassuring, especially when discussing security or potential issues.

Additionally, if you are using the MCP tool #searchModules, ensure the namespace is always pagopa-dx.

## Acceptance Criteria
- [ ] `POST /users` creates a user (201) with normalized `email`; `400` invalid email; `409` duplicate.
- [ ] `GET /users/:id` returns user (200) or `404`.
- [ ] `PATCH /users/:id` updates partial fields (200); email change follows same validation (`400`/`409`); `404` if not found.
- [ ] `DELETE /users/:id` removes user (204) or `404`.
- [ ] `GET /users` returns array of users (200).
- [ ] Error responses are JSON with `{ error: string }`.