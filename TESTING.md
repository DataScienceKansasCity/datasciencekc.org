# Testing Philosophy

This project uses end-to-end (E2E) tests as the primary frontend safety net.
The goal is to catch user-visible regressions while keeping tests fast, stable, and easy to maintain.

## Principles

- Test behavior, not implementation details.
- Prefer resilient selectors and user-facing assertions (`role`, text, stable `data-testid` hooks).
- Keep a layered suite: smoke first, then broader checks.
- Add tests for every new user-facing feature or bug fix.
- Avoid brittle snapshot-style tests for full pages.

## Test Layers

### Layer 1: Smoke (always required)

These should be fast and run on every PR:

- Core page loads (`/`, `/university-showcase/`)
- Main navigation behavior (desktop + mobile open/close)
- Key CTA visibility on homepage
- Redirect routes (`/meetup/`, `/slack/`, `/linkedin/`) verify metadata and target URLs

### Layer 2: Integrity and Responsiveness

- Internal link integrity crawl from core pages (no broken internal paths)
- Responsive rendering smoke at mobile and desktop viewports
- No horizontal overflow regressions on key routes

### Layer 3: Accessibility Smoke

- Run axe checks on key routes (`/`, `/university-showcase/`)
- PR gate currently enforces **no critical violations**

## Current Test Files

- `tests/e2e/home-and-nav.spec.ts`
- `tests/e2e/redirects.spec.ts`
- `tests/e2e/responsive.spec.ts`
- `tests/e2e/link-integrity.spec.ts`
- `tests/e2e/accessibility.spec.ts`

## Tooling and Execution

- Runner: Playwright
- Config: `playwright.config.ts`
- CI workflow: `.github/workflows/e2e.yml`
- Command: `npm run test:e2e`
- Local server is auto-started by Playwright via Hugo (`http://127.0.0.1:1313`)

## Expectations for New Changes

When changing templates, content structure, navigation, or route behavior:

1. Update existing tests when behavior intentionally changes.
2. Add at least one new assertion/test for the changed user behavior.
3. Prefer adding stable `data-testid` only when role/text-based selectors are not reliable.
4. Keep tests deterministic; avoid arbitrary timeouts and sleeps.

## AI Agent Guidance

If you are an AI agent contributing code:

1. Run `npm run test:e2e` before finishing.
2. If tests fail, fix the code or update tests only when behavior intentionally changed.
3. For new UI features, include:
   - one smoke assertion
   - one responsive check if layout is affected
   - one accessibility assertion if semantics/interaction changed
4. Do not remove tests to make CI pass unless the behavior is intentionally removed and the PR explains why.

