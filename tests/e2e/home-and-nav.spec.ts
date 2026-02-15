import { expect, test } from "@playwright/test";

test("home page smoke test", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Data Science Kansas City/i);
  await expect(
    page.getByText("Connecting, Learning, and Growing Together in the Heart of America")
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "University Showcase" })).toBeVisible();
  await expect(page.locator('a[href*="meetup.com/data-science-kc/events"]')).toBeVisible();

  await expect(page.locator('iframe[src*="youtube.com"]')).toBeAttached();
});

test("mobile nav opens, shows links, and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByTestId("mobile-menu-button");
  const menuWrapper = page.getByTestId("mobile-menu-wrapper");

  await expect(menuWrapper).toHaveCSS("visibility", "hidden");
  await menuButton.click();

  await expect(menuWrapper).toHaveCSS("visibility", "visible");
  await expect(menuWrapper.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(menuWrapper.getByRole("link", { name: "University Showcase" })).toBeVisible();

  await page.getByTestId("mobile-menu-close-button").click();
  await expect(menuWrapper).toHaveCSS("visibility", "hidden");
});

test("university showcase page loads", async ({ page }) => {
  await page.goto("/university-showcase/");
  await expect(page).toHaveTitle(/University Showcase/i);
  await expect(
    page.getByRole("heading", { level: 1, name: /Data Science KC University Showcase/i })
  ).toBeVisible();
});
