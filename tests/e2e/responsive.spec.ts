import { expect, test } from "@playwright/test";

type Viewport = {
  name: string;
  width: number;
  height: number;
  isMobile: boolean;
};

const viewports: Viewport[] = [
  { name: "mobile", width: 390, height: 844, isMobile: true },
  { name: "desktop", width: 1440, height: 900, isMobile: false }
];

const routes = ["/", "/posts/"];

for (const viewport of viewports) {
  for (const route of routes) {
    test(`${route} renders at ${viewport.name} viewport`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(route);

      await expect(page.locator("body")).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1
      );
      expect(hasHorizontalOverflow).toBeFalsy();

      if (viewport.isMobile) {
        await expect(page.getByTestId("mobile-menu-button")).toBeVisible();
      } else {
        await expect(page.getByTestId("desktop-main-nav")).toBeVisible();
      }
    });
  }
}
