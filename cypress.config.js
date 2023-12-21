const { defineConfig } = require("cypress");

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

  pageLoadTimeout: 1200000,
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
  plugins: (on, config) => {
    on('after:run', async (results) => {
      const jsonFilePath = 'cypress/reports/mochawesome/testresults/mochawesome_009.json';
      const outputCsvFilePath = 'cypress/reports/mochawesome/testresults/mochawesome_009.csv'; // Corrected file extension

      // Load the conversion script from the dedicated folder
      const convertToCsv = require('./cypress/scripts/convert/convertToCsv');
      await convertToCsv(jsonFilePath, outputCsvFilePath);
    });
  }
});
