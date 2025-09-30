import { test, expect } from '@playwright/test';


test('Test Mouse Hover', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
    await page.getByText('Zero Cancellation').first().click();

    await page.waitForTimeout(30000);

});

test('Test Mouse Clicks', async ({ page }) => {
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    // right click
    page.once("dialog", dialog => {
        console.log(dialog.message())
        expect(dialog.message()).toEqual('clicked: edit')
        dialog.accept();
    });
    await page.getByText("right click me").click({ button: 'right' });
    await page.getByText("Edit").click();

    // Handle dialog for double-click
    page.once("dialog", dialog => {
        console.log(dialog.message())
        expect(dialog.message()).toEqual('You double clicked me.. Thank You..');
        dialog.accept();
    });
    await page.getByText("Double-Click Me To See Alert").dblclick();


    await page.goto("https://the-internet.herokuapp.com/shifting_content");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByRole('link', { name: 'Example 1: Menu Element' }).click({ modifiers: ['Shift'] })
    ]);
    // await newPage.waitForLoadState();
    console.log("Test: ", await newPage.title());
    await expect(newPage.getByRole('heading', { name: 'Shifting Content: Menu Element' })).toBeVisible();
});