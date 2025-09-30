import { test, expect } from '@playwright/test';

test('Multi Select DropDown', async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/multiSelectDropdown.html")
    const locator = page.getByLabel('Select your favorite fruits:');
    const fruits = ['Date', "Fig", "Apple"];
    await locator.selectOption(fruits);
    expect((await locator.getByRole('option', { selected: true }).allTextContents()).sort()).toEqual(fruits.sort());

    // DeSelect All
    await locator.selectOption([]);
    await expect(locator.getByRole('option', { selected: true })).not.toBeVisible();

    // Select by Index
    await locator.selectOption([{ index: 2 }, { label: 'Banana' }, { value: 'elderberry' }]);
    expect((await locator.getByRole('option', { selected: true }).allTextContents())).toEqual(['Banana', 'Cherry', 'Elderberry']);
});

test('Single Select DropDown', async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/singleSelectDropdown.html")
    const locator = page.getByLabel('Choose a fruit:');
    await locator.selectOption({ index: 4 })
    await expect(locator.getByRole('option', { selected: true })).toHaveText('Date');
    await locator.selectOption('Apple')
    await expect(locator.getByRole('option', { selected: true })).toHaveText('Apple');
});