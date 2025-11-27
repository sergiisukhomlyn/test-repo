import { test, expect } from "@playwright/test";
import { RozetkaHomePage } from "../pages/RozetkaHomePage";

test.describe("Rozetka Home Page Tests", () => {

    test("Search item works", async ({ page }) => {
        const home = new RozetkaHomePage(page);

        await home.goto();
        await home.search("Laptop");

        await expect(page.locator("rz-search-result")).toBeVisible();
    });

    test("Opening catalogue", async ({ page }) => {
        const home = new RozetkaHomePage(page);

        await home.goto();
        await home.catalogButton.click();

        await expect(page.locator("rz-navigation-tree")).toBeVisible();
    });

    test("Go to cart", async ({ page }) => {
        const home = new RozetkaHomePage(page);

        await home.goto();
        await home.cartButton.click();

        await expect(page.locator("rz-cart")).toBeVisible();
    });

});
