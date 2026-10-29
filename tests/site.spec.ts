import { expect, test } from '@playwright/test';

test('home page displays the course introduction and a loaded React logo', async ({
  page,
}) => {
  await page.goto('./');

  await expect(
    page.getByRole('heading', { name: 'Welcome to React Basic' }),
  ).toBeVisible();

  const logo = page.getByRole('img', { name: 'Logo' }).first();
  await expect(logo).toBeVisible();
  await expect
    .poll(() => logo.evaluate((image: HTMLImageElement) => image.naturalWidth))
    .toBeGreaterThan(0);
});

test('navigation opens the fundamentals section', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await page.getByRole('link', { name: 'Section 1', exact: true }).click();

  await expect(page).toHaveURL(/\/section1\/?$/);
  await expect(
    page.getByRole('heading', { name: 'React Fundamentals' }),
  ).toBeVisible();
});

test('the fundamentals section remains available after a page reload', async ({
  page,
}) => {
  await page.goto('section1');
  await expect(
    page.getByRole('heading', { name: 'React Fundamentals' }),
  ).toBeVisible();

  await page.reload();

  await expect(
    page.getByRole('heading', { name: 'React Fundamentals' }),
  ).toBeVisible();
});
