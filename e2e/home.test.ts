import { test, expect } from '@playwright/test'

test('Home page loads and newsletter exists', async ({ page }) => {
  await page.goto('/')
  
  // Wait for the newsletter section
  const newsletterHeading = page.locator('h2:has-text("Join the Inner Circle")')
  await expect(newsletterHeading).toBeVisible()
  
  // Verify footer content
  await expect(page.locator('footer')).toBeVisible()
})
