import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/university-showcase/"];
const appearances = ["light", "dark"] as const;

for (const appearance of appearances) {
  for (const route of routes) {
    test(`no serious or critical axe violations on ${route} (${appearance})`, async ({ page }) => {
      await page.addInitScript((mode: "light" | "dark") => {
        localStorage.setItem("appearance", mode);
      }, appearance);

      await page.goto(route);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        // Ignore known third-party embed noise from YouTube player internals.
        .exclude('iframe[src*="youtube.com"]')
        .exclude('iframe[src*="youtube-nocookie.com"]')
        .analyze();

      const blockingViolations = results.violations.filter(
        (violation) => violation.impact === "critical" || violation.impact === "serious"
      );

      expect(
        blockingViolations,
        `Serious/critical a11y violations on ${route} (${appearance}): ${blockingViolations
          .map((violation) => violation.id)
          .join(", ")}`
      ).toEqual([]);
    });
  }
}
