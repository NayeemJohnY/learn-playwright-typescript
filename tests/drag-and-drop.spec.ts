import { test, expect } from '@playwright/test';


test('Test Drag and Drop', async ({ page }) => {
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
    const draggable = page.locator('#draggable');
    const droppable = page.locator('#droppable');
    await draggable.dragTo(droppable);
    await expect(droppable).toContainClass('ui-state-highlight');
    await expect(droppable).toHaveText('Dropped!');

    // multiple actions
    await page.reload()
    await draggable.hover();
    await page.mouse.down();
    await droppable.hover();
    await page.mouse.up();
    await expect(droppable).toContainClass('ui-state-highlight');
    await expect(droppable).toHaveText('Dropped!');

})