const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/*.spec.js",
    baseUrl: "http://localhost:3000",
  },
});
