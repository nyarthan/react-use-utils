import { test } from '../fixtures/test';

test('useDimensions', async ({ page }) => {
  await page.goto('http://localhost:3000/use-dimensions');
});
