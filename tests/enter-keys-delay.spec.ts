import { test, expect } from '@playwright/test';

test('Enter Keys with Delay', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    const searchPlaceholder = page.getByPlaceholder('Search for Products, Brands and More');
    await searchPlaceholder.pressSequentially('Laptops', { delay: 1000 });
});