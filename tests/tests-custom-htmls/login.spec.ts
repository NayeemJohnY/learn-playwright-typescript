import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/login.html");

    await page.getByLabel('Name').fill("Its my Name");

    await page.getByPlaceholder('Enter your email').fill("emailme@email.com");

    await page.getByRole('button', { name: 'Submit' }).click()

    await expect(page.locator('#message')).toHaveText('Form submitted!');

});