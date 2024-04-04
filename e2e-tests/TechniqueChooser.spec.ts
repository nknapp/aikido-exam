import { expect, test } from "@playwright/test";

test("loads keeps settings across page reload", async ({ page }) => {
  await page.goto("http://localhost:4321/en/aikido-dojo-darmstadt/");
  await page.getByText("Random").click();
  await expect(page.getByText("Random")).toHaveAttribute("aria-checked", "false");

  await page.getByText("5th Kyu").click();
  await expect(page.getByText("5th Kyu")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByText("suwari waza")).toBeVisible();

  await page.reload();

  await expect(page.getByText("Random")).toHaveAttribute("aria-checked", "false");
  await expect(page.getByText("5th Kyu")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByText("suwari waza")).toBeVisible();
});
