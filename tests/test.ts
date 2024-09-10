import { expect, test } from '@playwright/test'

test('index page has expected elements', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByText('Lmgtfy', { exact: true })).toBeVisible()
	await expect(page.getByText('תן לי לגגל את זה בשבילך', { exact: true })).toBeVisible()
	await expect(page.getByText('חיפוש ב-Google', { exact: true })).toBeVisible()
	await expect(page.getByText("יותר מזל משכל", { exact: true })).toBeVisible()
})
