

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '27asx7',
  e2e: {
    setupNodeEvents(on, config) {
     
    },
  },
  fixturesFolder: 'cypress/e2e/fixtures',
  video: true, 
  videosFolder:"cypress/e2e/videos",
  screenshotsFolder: "cypress\e2e\screenshots",

  // videoUploadOnPasses: false, 
  screenshots: true,
  screenshotOnRunFailure: true,
});
