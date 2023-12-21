// const { convert } = require('json2csv');
// const fs = require('fs').promises;

// module.exports = (on, config) => {
//   on('after:run', async (results) => {
//     const jsonFilePath = 'cypress/reports/mochawesome/testresults/mochawesome.json';
//     const outputCsvFilePath = 'cypress/reports/mochawesome/testresults/mochawesome.csv';

//     try {
//       console.log(`Reading JSON file from: ${jsonFilePath}`);

//       const data = await fs.readFile(jsonFilePath, 'utf8');
//       const jsonData = JSON.parse(data);

//       // Specify the fields you want in your CSV
//       const fields = ['field1', 'field2', 'field3']; // Replace with your actual field names

//       // Use json2csv to convert JSON to CSV
//       const csvData = await convert({ data: jsonData, fields });

//       await fs.writeFile(outputCsvFilePath, csvData, 'utf8');

//       console.log(`CSV file written to: ${outputCsvFilePath}`);
//     } catch (err) {
//       console.error(`Error during conversion: ${err.message}`);
//     }
//   });
// };
// cypress/scripts/convert/convertToCsv.js
const { convert } = require('json2csv');
const fs = require('fs').promises;

async function convertToCsv(jsonFilePath, outputCsvFilePath) {
  try {
    console.log(`Reading JSON file from: ${jsonFilePath}`);
    console.log(`Writing CSV file to: ${outputCsvFilePath}`);

    const data = await fs.readFile(jsonFilePath, 'utf8');
    const mochawesomeData = JSON.parse(data);

    // Specify the fields you want in your CSV
    const fields = [
      'title',
      'fullFile',
      'duration',
      'state',
      'pass',
      'fail',
      'pending',
      'code',
      'err.message',
    ]; // Adjust as needed

    // Extract relevant information from the Mochawesome JSON
    const testsData = mochawesomeData.results[0].suites[0].tests.map((test) => ({
      title: test.title,
      fullFile: mochawesomeData.results[0].fullFile,
      duration: test.duration,
      state: test.state,
      pass: test.pass,
      fail: test.fail,
      pending: test.pending,
      code: test.code,
      'err.message': test.err ? test.err.message : '',
    }));

    // Use json2csv to convert JSON to CSV
    const csvData = await convert({ data: testsData, fields });

    await fs.writeFile(outputCsvFilePath, csvData, 'utf8');

    console.log(`CSV file written to: ${outputCsvFilePath}`);
  } catch (err) {
    console.error(`Error during conversion: ${err.message}`);
  }
}

module.exports = convertToCsv;
