import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  page.goto('/use-dimensions');
});

test('does not update value on resize', async ({ page }) => {
  const textarea = page.locator('textarea');
  await textarea.evaluate((node) =>
    node.setAttribute(
      'style',
      'width: 100px; height: 200px; padding: 0; border: none',
    ),
  );
  const value = await page.locator('textarea').inputValue();
  expect(JSON.parse(value)).not.toMatchObject({ width: 100, height: 200 });
});

test('updated value when reMeasure is called', async ({ page }) => {
  const textarea = page.locator('textarea');
  await textarea.evaluate((node) =>
    node.setAttribute(
      'style',
      'width: 100px; height: 200px; padding: 0; border: none',
    ),
  );
  await page.click('button');
  const value = await page.locator('textarea').inputValue();
  expect(JSON.parse(value)).toMatchObject({ width: 100, height: 200 });
});
