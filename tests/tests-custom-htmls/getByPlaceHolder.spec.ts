import { test, expect } from '@playwright/test'

test("Test Get By PlaceHolder", async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/placeholder.html")
    await page.getByPlaceholder("Enter your full name").fill("Test Me");
    await page.locator("id=email").fill("TestJohn@johntest.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("Password123");
    await page.getByLabel('Date of Birth:').fill('2025-10-04');
    await expect(page.getByLabel('Date of Birth:')).toHaveValue('2025-10-04');
    await page.getByPlaceholder('MM/DD/YYYY').fill('2025-09-04');
    await expect(page.getByPlaceholder('MM/DD/YYYY')).toHaveValue('2025-09-04');

});

test("Test Get By Label", async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/Label2.html")
    await page.getByLabel('Full Name:').fill('JohnJOhnJohn');
    await expect(page.getByPlaceholder('Enter first name')).toHaveValue('JohnJOhnJohn');

});
