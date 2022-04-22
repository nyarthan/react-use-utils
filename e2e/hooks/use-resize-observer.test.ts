import { test, expect } from '../fixtures';

test.beforeEach(async ({ page }) => {
  page.goto('/use-resize-observer');
});

test('updated value on resize', async ({ page }) => {
  const textarea = page.locator('textarea');
  await textarea.evaluate((node) =>
    node.setAttribute(
      'style',
      'width: 100px; height: 200px; padding: 0; border: none',
    ),
  );
  const value = await page.locator('textarea').inputValue();
  setTimeout(
    () =>
      expect(JSON.parse(value)).not.toMatchObject({ width: 100, height: 200 }),
    500,
  );
});
