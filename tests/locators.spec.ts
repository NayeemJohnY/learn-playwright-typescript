import { test, expect } from '@playwright/test';

test.describe("Locators test", () => {
    test("Test 1", async ({ page }) => {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        //1. id
        await page.locator('id=input-firstname').fill("Test Automation")

        // 2. class name
        await expect(page.locator(".img-responsive")).toHaveAttribute('alt', 'naveenopencart');

        // 3. text
        await expect(page.locator('text=Register Account')).toBeVisible();

        // 4. css Selector
        await page.locator('css=#input-email').fill('Email@email.com')
        await page.locator('[name="telephone"]').fill('1234567890')

        // 5. xpath
        await expect(page.locator('xpath=//a[text()="Downloads"]')).toBeVisible();

        // 6. data-testid

        await page.goto("https://www.makemytrip.com/")
        await expect(page.getByTestId('country-lang-switcher')).toBeEnabled();
    });
    test.use({ testIdAttribute: 'data-cy' })
    test("Test 2 Custom Test ID", async ({ page }) => {
        // 7. Custom-testid
        await page.goto("https://www.makemytrip.com/")
        await page.getByTestId("closeModal").click();
        await expect(page.getByTestId('country-lang-switcher')).toBeEnabled();
        await page.getByRole('link', { name: 'Hotels' }).click();
        await page.getByRole('button', {name: "Search"}).click();
        await page.waitForTimeout(30000);
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        const radioButton = page.getByRole('radio', { name: 'yes' });
        await radioButton.click()
        await expect(radioButton).toBeChecked();
        const checkButton = page.getByRole('checkbox');
        await checkButton.click()
        await expect(checkButton).toBeChecked();
    });


})