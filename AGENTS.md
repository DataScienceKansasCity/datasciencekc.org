# Agent Notes

This file is for future AI/code agents working in this repository.
Use it as the quick-start operational guide for safe, consistent contributions.

## Project Overview

- Site type: Hugo static site
- Theme: Blowfish (git submodule at `themes/blowfish`)
- Primary custom logic:
  - custom homepage layout: `layouts/partials/home/page.html`
  - custom header/nav behavior: `layouts/partials/header/basic.html`
  - custom redirect template: `layouts/_default/redirect.html`
- Key content lives in `content/`
- Config lives in `config/_default/`

## Core Commands

- Build: `hugo --gc --minify`
- Local dev server: `hugo server -D`
- Install JS deps: `npm install`
- Run E2E tests: `npm run test:e2e`

## CI Workflows

- Deploy workflow: `.github/workflows/hugo.yaml`
  - builds and deploys Hugo site to GitHub Pages on `main`
- E2E workflow: `.github/workflows/e2e.yml`
  - runs Playwright tests on PRs and `main`

When modifying build/test tooling, update both workflow files if needed.

## Testing Policy (Required)

`TESTING.md` is the canonical testing policy. Follow it.

Minimum requirement for UI-affecting changes:

- update/add relevant Playwright coverage under `tests/e2e/`
- run `npm run test:e2e`
- include test impact in the PR summary

Current E2E coverage includes:

- smoke behavior (`tests/e2e/home-and-nav.spec.ts`, `tests/e2e/redirects.spec.ts`)
- responsive checks (`tests/e2e/responsive.spec.ts`)
- internal link integrity (`tests/e2e/link-integrity.spec.ts`)
- accessibility smoke via axe (`tests/e2e/accessibility.spec.ts`)

## Navigation and Redirect Conventions

- Main menu links are defined in `config/_default/menus.en.toml`
- Header behavior is customized in `layouts/partials/header/basic.html`
- Stable selectors (`data-testid`) are intentionally present there for tests
- Redirect pages (e.g. `/meetup/`, `/slack/`, `/linkedin/`) are content files using:
  - `layout: "redirect"`
  - `redirect_url` in front matter
  - template: `layouts/_default/redirect.html`

If you change redirects or nav structure, update related tests.

## Content and Asset Guidelines

- Add/update pages under `content/` with valid front matter
- Put static images/files under `static/`
- Keep link targets current for external community resources
- Preserve tone and structure on homepage/community pages unless explicitly requested

## Safe Change Practices for Agents

- Prefer small, reviewable commits grouped by concern
- Do not modify `themes/blowfish` unless the task explicitly requires theme-level changes
- Avoid brittle selectors in tests; prefer roles/text, then stable `data-testid` as fallback
- Do not remove tests to make CI pass unless behavior is intentionally removed and documented
- If behavior changed intentionally, update tests and PR description together
