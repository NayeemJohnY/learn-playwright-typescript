import { test, expect } from '@playwright/test';

test('getByText', async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByText.html")

    await page.locator('.section button', { hasText: 'Hello World' }).click();
    const locator = page.locator('#popupMessage');
    await expect(locator).toHaveText('Button "Hello World" clicked');
    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.getByText(/^Today is \d{4}-\d{2}-\d{2}$/)).toBeVisible();

    // await expect(page.getByText(`Today is ${new Date().toISOString().split("T")[0]}`)).toBeVisible();

    await expect(page.getByText('Parent Child', { exact: true })).toBeVisible();

});