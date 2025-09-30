import { test, expect } from '@playwright/test';

test.describe("Chaining Test", () => {
    test("Chaining Selectors", async ({ page }) => {

        await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
        const fullname = page.locator("#Form_getForm >> #Form_getForm_Name");
        // await fullname.fill("Full Name")
        const getTrialButton = page.locator('#Form_getForm >> [value="Get Your Free Trial"]');
        await getTrialButton.click();
    });


    test("Chaining Locators", async ({ page }) => {

        await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
        const formLocator = page.locator("#Form_getForm");
        const fullname = formLocator.getByPlaceholder("Your Full Name*");
        await fullname.focus()
        await page.waitForTimeout(4000)
        await fullname.fill("Johny Vinish")
        const getTrialButton = formLocator.getByRole("button", { name: "Get Your Free Trial" });
        await getTrialButton.click();
    });
});