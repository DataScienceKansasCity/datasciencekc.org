# Agent Notes

Future AI contributors should follow `TESTING.md` as the canonical guide for frontend test strategy, scope, and maintenance standards.

Minimum requirement for UI-affecting changes:

- update/add relevant Playwright coverage under `tests/e2e/`
- run `npm run test:e2e`
- include test impact in the PR summary

