import { test as base } from 'playwright-bdd';

// Extend test with fixtures that use authenticated storage state
export const test = base.extend({
  // Storage state is configured in playwright.config.ts
  // Tests will automatically use the authenticated session from auth.setup.ts
});