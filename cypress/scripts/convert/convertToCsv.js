const json2csv = require('json2csv').parse;
const { writeFileSync } = require('cypress/fs');

// Read JSON data from the fixture file
const jsonData = require('../../e2e/fixtures/HomePage_Search.json'); // Adjust the path as needed

// Convert JSON to CSV
const csvData = json2csv(jsonData);

// Save CSV data to a file
fs.writeFileSync('./cypress/reports/testData.csv', csvData);

console.log('Conversion successful!');
