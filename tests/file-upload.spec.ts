import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload Files', async ({ page }) => {

    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
    await page.locator('[name="upfile"]').setInputFiles('sample.txt');
    await page.getByRole('button', { name: 'Press' }).click();
    await expect(page.getByRole('heading', { name: 'File Upload Results' })).toBeVisible();
    await expect(page.locator('pre')).toContainText("Hello Welcome Upload");


    // multiple files
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    const files = ['sample.txt', 'sample copy.txt', 'MyAccount.png']
    await page.locator('#filesToUpload').setInputFiles(files)
    await expect(page.locator('#fileList li')).toHaveText(files)

    await page.locator('#filesToUpload').setInputFiles([])
    await expect(page.locator('#fileList li')).toHaveText(['No Files Selected']);

    await page.locator('#filesToUpload').setInputFiles({
        name: "My New File.txt",
        mimeType: 'text/plain',
        buffer: Buffer.from("This is new File on go")
    })
    await expect(page.locator('#fileList li')).toHaveText(['My New File.txt']);


});