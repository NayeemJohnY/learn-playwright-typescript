import { test, expect } from '@playwright/test';

test('css Pseudo', async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/cssPseudo.html");

    await expect(page.locator('a:text-is("Home")')).toBeVisible();

    console.log(await page.locator('div  a:text-is("Home")').allTextContents());

    console.log(await page.locator('button:text-matches("Log.?in", "i")').allTextContents());
});