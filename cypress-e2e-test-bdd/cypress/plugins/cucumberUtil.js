const report = require('multiple-cucumber-html-reporter');

const setupReport = (results) => {
    report.generate({
        jsonDir: './cypress/cucumber-json/',
        reportPath: './cypress/report/',
        metadata:{
              browser: {
                  name: results.browserName,
                  version: results.browserVersion
              },
              device: 'Localhost',
              platform: {
                  name: results.osName,
                  version: results.osVersion
              }
          },
          customData: {
              title: 'Run info',
              data: [
                  {label: 'Project', value: 'Custom project'},
                  {label: 'Release', value: '1.2.3'},
                  {label: 'Cycle', value: 'B11221.34321'},
                  {label: 'Execution Start Time', value: results.startedTestsAt},
                  {label: 'Execution End Time', value: results.endedTestsAt}
              ]
          }
      });
}

exports.setupReport = setupReport;
