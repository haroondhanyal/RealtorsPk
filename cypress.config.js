const { defineConfig } = require("cypress");
const path = require('path');

module.exports = defineConfig({
  projectId: '27asx7',
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // Custom setup for node events if needed
    },
  },
  fixturesFolder: 'cypress/e2e/fixtures',
  video: true, 
  videosFolder: 'cypress/e2e/videos',
  screenshotsFolder: 'cypress/e2e/screenshots',

  pageLoadTimeout: 120000,
  screenshots: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesome/testresults',
      overwrite: false,
      html: true,
      json: true
    },    
  },
  // plugins: (on, config) => {
  //   on('after:run', async (results) => {
  //     const convertScriptPath = path.join(__dirname, 'cypress', 'scripts', 'convert','convertToCsv.js'); // Adjust the path as needed

  //     // Run the conversion script
  //     await cy.exec(`node ${convertScriptPath}`);
  //   });
  // }
});
