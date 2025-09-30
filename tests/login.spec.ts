import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { chromium, firefox, webkit } from '@playwright/test'


test("Login test", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailAddress: Locator = page.getByRole('textbox', { name: 'E-Mail Address' })
    const password: Locator = page.getByRole('textbox', { name: 'Password' });
    const loginButton: Locator = page.getByRole('button', { name: 'Login' });

    await emailAddress.fill("nayeem.john@outlook.com")
    await password.fill("Sumaiya@2505")
    await loginButton.click()

    await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();

    await page.screenshot({ path: "MyAccount.png" })

    await browser.close();
});