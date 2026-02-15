import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/university-showcase/"];

for (const route of routes) {
  test(`no critical axe violations on ${route}`, async ({ page }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();

    const criticalViolations = results.violations.filter((violation) => violation.impact === "critical");

    expect(
      criticalViolations,
      `Critical a11y violations on ${route}: ${criticalViolations
        .map((violation) => violation.id)
        .join(", ")}`
    ).toEqual([]);
  });
}
