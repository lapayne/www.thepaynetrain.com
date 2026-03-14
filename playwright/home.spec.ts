import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("loads and shows hero header", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Lee Payne/i }),
    ).toBeVisible();
    await expect(page.getByText(/High-performance/i)).toBeVisible();
  });

  test("footer contact button is visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("button", { name: /contact me/i }),
    ).toBeVisible();
  });

  test("quotes section is visible", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Quote of the day").click();
  });

  test("header navigation links are present", async ({ page }) => {
    await page.goto("/");

    // Check internal navigation links (scroll links) - look for buttons in nav
    const internalLinks = ["Experience", "Education", "Contact", "Resume"];
    for (const linkText of internalLinks) {
      await expect(
        page.locator(`button:has-text("${linkText}")`).first(),
      ).toBeVisible();
    }

    // Check external blog link
    await expect(
      page.locator('a[href="https://blog.thepaynetrain.com"]').first(),
    ).toBeVisible();
  });

  test("all sections are loaded", async ({ page }) => {
    await page.goto("/");

    // Check that sections corresponding to nav links are present
    const sections = ["experience", "education", "contact", "resume"];
    for (const sectionId of sections) {
      await expect(page.locator(`#${sectionId}`)).toBeVisible();
    }
  });
});
