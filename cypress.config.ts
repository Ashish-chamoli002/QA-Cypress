import { defineConfig } from 'cypress';  
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/features/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      apiUrl: 'https://opensource-demo.orangehrmlive.com/api',
      defaultTimeout: 10000
    }
  },
});