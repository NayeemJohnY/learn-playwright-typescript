import { test, expect } from '@playwright/test';
import { selectors } from '@playwright/test';

test('getByTestId', async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByTestId.html");

    await expect(page.getByTestId('login-button')).toBeVisible();
    try {
        await expect(page.getByTestId('register-button')).toBeVisible();
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        } else {
            console.log(String(error));
        }
        selectors.setTestIdAttribute('data-qa')
        await expect(page.getByTestId('register-button')).toBeVisible();
    }

});