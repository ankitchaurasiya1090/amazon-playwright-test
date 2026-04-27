const { test } = require('@playwright/test');

test('Search Galaxy and add to cart', async ({ page }) => {

  await page.goto('https://demoblaze.com');

  // Click Phones category
  await page.locator('a:has-text("Phones")').click();

  // Click second phone (simulate Galaxy)
  await page.locator('.card-title').nth(1).click();

  // Get price
  const price = await page.locator('.price-container').textContent();
  console.log("Galaxy Price:", price);

  // Add to cart
  await page.locator('a:has-text("Add to cart")').click();
});