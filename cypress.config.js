const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // viewportWidth : 1280,
    // viewportHeight : 720,
    // defaultCommandTimeout: 5000,
    // watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
