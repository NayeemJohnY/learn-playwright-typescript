import { test, expect } from '@playwright/test';

test.describe("Auto Wait and Timeout", () => {

    test("Auto Wait", async ({ page }) => {
        await page.goto("https://classic.freecrm.com/register/");
        await page.getByRole('checkbox').check();
        await page.locator('#checkbox').check();
    });

    test("Update Timeout", async ({ page }) => {
        page.setDefaultTimeout(15000)
        await page.goto("https://classic.freecrm.com/register/");
        await page.locator('#checkbox').check();
    });


    test("Update Timeout inline", async ({ page }) => {
        await page.goto("https://classic.freecrm.com/register/");
        await page.locator('#checkbox').check({ timeout: 10000 });
    });

    // test.use({ actionTimeout: 20000 })
    test("Update Timeout using use", async ({ page }) => {
        await page.goto("https://classic.freecrm.com/register/");
        await page.locator('#checkbox').check();
    });

});