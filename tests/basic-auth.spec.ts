import { test, expect } from '@playwright/test';

test("Handle Basic Auth", async ({ page }) => {
    const basic_auth = "Basic " + btoa('admin:admin')
    await page.setExtraHTTPHeaders({
        'Authorization': basic_auth
    })
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible();
})

