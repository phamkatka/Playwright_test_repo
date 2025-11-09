// @ts-check
import { test, expect } from '@playwright/test';

//test('has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
//});

//test('get started link', async ({ page }) => {
 // await page.goto('https://playwright.dev/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});

test('navigates to Czechitas',async ({page}) => {
  await page.goto('/prihlaseni');

  await page.getByRole('textbox', {name: 'Email'}).fill("blabla.pokus@czechitas.cz")
  await page.getByRole('textbox', {name: 'Heslo'}).fill("password")

  await page.getByRole('button', {name: 'Přihlásit'}).click()

  await expect(page.locator(".invalid-feedback > strong:nth-child(1)")).toBeVisible()

});
