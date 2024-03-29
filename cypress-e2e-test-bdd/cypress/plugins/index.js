// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const fs = require('fs');

const { setupReport } = require('./cucumberUtil')
// const { queryTestDb } = require('./dbUtil')
// const { isFileDownloadedWith } = require('./fileUtil')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('before:browser:launch', (results) => {
    fs.rmdirSync("cypress/cucumber-json", { recursive: true });
    fs.rmdirSync("cypress/report", { recursive: true });
  })

  on('after:screenshot', (results) => {
    console.log('done..');
    setupReport(results);
  })

  on('task', {
    canSum(array) {
      return 4
    },
    isFileDownloadedWith(text, ms = 4000) {
      return isFileDownloadedWith(text, ms)
    },
    runDBQuery(query) {
      return queryTestDb(query)
    }
  });

  return config;
}