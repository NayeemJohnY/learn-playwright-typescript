import { test, expect } from '@playwright/test'

test("Test Get By Label Case 1 : Input within Label", async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByLabelPlaceholderText_HappyPath.html")
    await page.getByLabel("First Name:").fill("Test Me");
    await page.getByLabel("Last Name:").fill("Test John");
});

test("Test Get By Label Case 2 : Outside Label", async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByLabelPlaceholderText_Case1.html")
    await page.getByLabel("First Name:").fill("Test Me", { timeout: 10000 }).catch(async () => {
        await page.getByPlaceholder("Enter first name").fill("Test Me");
    });
    await page.getByLabel("Last Name:").fill("Test John");

});

test("Test Get By Label Case 3 : Using for", async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByLabelPlaceholderText_Case2.html")
    await page.getByLabel("First Name:").fill("Test Me", { timeout: 10000 }).catch(async () => {
        await page.getByPlaceholder("Enter first name").fill("Test Me");
    });
    await page.getByLabel("Last Name:").fill("Test John");

});