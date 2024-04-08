import { expect, test } from "@playwright/test";

test("loads keeps settings across page reload", async ({ page }) => {
  await page.goto("http://localhost:4321/en/aikido-dojo-darmstadt/");
  {
    const randomizeButton = page.getByRole("button", { name: "Random" });
    await randomizeButton.click();
    await expect(randomizeButton).toHaveAttribute("aria-checked", "false");

    const kyu5Button = page.getByRole("button", { name: "5th Kyu" });
    await kyu5Button.click();
    await expect(kyu5Button).toHaveAttribute("aria-checked", "true");
    await expect(page.getByText("suwari waza")).toBeVisible();
  }
  await page.reload();
  {
    const randomizeButton = page.getByRole("button", { name: "Random" });
    const kyu5Button = page.getByRole("button", { name: "5th Kyu" });
    await expect(randomizeButton).toHaveAttribute("aria-checked", "false");
    await expect(kyu5Button).toHaveAttribute("aria-checked", "true");
    await expect(page.getByText("suwari waza")).toBeVisible();
  }
});
