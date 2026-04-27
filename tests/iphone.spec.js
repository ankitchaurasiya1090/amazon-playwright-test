const { test } = require('@playwright/test');

test('Search iPhone and add to cart', async ({ page }) => {

  await page.goto('https://demoblaze.com');

  // Click Phones category
  await page.locator('a:has-text("Phones")').click();

  // Click first phone (simulate iPhone)
  await page.locator('.card-title').first().click();

  // Get price
  const price = await page.locator('.price-container').textContent();
  console.log("iPhone Price:", price);

  // Add to cart
  await page.locator('a:has-text("Add to cart")').click();
});