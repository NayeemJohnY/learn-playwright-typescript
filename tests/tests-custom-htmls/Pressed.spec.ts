import { test, expect } from '@playwright/test';

test('Press', async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/pressed.html");

    await page.getByRole('button', { name: 'Toggle Me' }).press('Enter');
    await expect(page.getByRole('button', { name: 'Toggle Me', pressed: true })).toBeVisible();


});