import { test, expect } from '@playwright/test'

test.describe('Parliament site – non-demo mode', () => {
  test('homepage renders hero and stats from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /Parliament of Aldoria/i }).first()).toBeVisible()
    await expect(page.getByText("The People's Parliament")).toBeVisible()
    // Stats from Drupal
    await expect(page.getByText('350').first()).toBeVisible()
  })

  test('members listing shows imported members', async ({ page }) => {
    await page.goto('/members')
    await expect(page.getByRole('heading', { name: 'Members of Parliament' })).toBeVisible()
    await expect(page.getByText('Diana Petrov').first()).toBeVisible()
  })

  test('member detail page renders', async ({ page }) => {
    await page.goto('/members/eleanor-ashworth')
    await expect(page.getByRole('heading', { name: /Eleanor Ashworth/i })).toBeVisible()
    await expect(page.getByText('Constituency').first()).toBeVisible()
    await expect(page.getByText('Back to Members').first()).toBeVisible()
  })

  test('committees listing shows imported committees', async ({ page }) => {
    await page.goto('/committees')
    await expect(page.getByRole('heading', { name: 'Committees' })).toBeVisible()
    await expect(page.getByText('Digital Innovation').first()).toBeVisible()
  })

  test('committee detail page renders', async ({ page }) => {
    await page.goto('/committees/finance-economic-affairs')
    await expect(page.getByRole('heading', { name: /Finance/i })).toBeVisible()
  })

  test('legislation listing shows imported legislation', async ({ page }) => {
    await page.goto('/legislation')
    await expect(page.getByRole('heading', { name: 'Legislation' })).toBeVisible()
    await expect(page.getByText('Climate Action Framework Act').first()).toBeVisible()
  })

  test('news listing shows imported news', async ({ page }) => {
    await page.goto('/news')
    await expect(page.getByRole('heading', { name: /News/i }).first()).toBeVisible()
    await expect(page.getByText('Speaker Announces').first()).toBeVisible()
  })

  test('sessions listing shows imported sessions', async ({ page }) => {
    await page.goto('/sessions')
    await expect(page.getByRole('heading', { name: 'Sessions' })).toBeVisible()
    await expect(page.getByText('Plenary').first()).toBeVisible()
  })

  test('about page renders via route query', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About Parliament' })).toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/members"]')
    await expect(page).toHaveURL('/members')
    await expect(page.getByRole('heading', { name: 'Members of Parliament' })).toBeVisible()
  })
})
