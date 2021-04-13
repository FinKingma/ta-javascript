// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const path = require('path');
const fs = require('fs');
const { Pool, Client } = require('pg')
var xlsx = require('node-xlsx');

function queryTestDb(query, config) {
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    const client = new Client({
      user: 'cypressAdmin',
      host: 'cypressdb.cwumyrdl48cq.eu-central-1.rds.amazonaws.com',
      database: 'postgres',
      password: 'KAAA$123',
      port: 5432,
    })
    client.connect()
    client.query(query, (err, res) => {
      if (err) reject(err)
      else {
        client.end()
        console.log(res)
        return resolve(true);
      }
    })
  });
}

const downloadDirectory = path.join(__dirname, '..', 'downloads');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('task', {
    isFileDownloadedWith(text, ms = 4000) {
      console.log(
        `looking for xlsx file in ${downloadDirectory}`,
        text,
        ms
      );
      let result = xlsx.parse(downloadDirectory + '/file_example_XLSX_10.xlsx');  
      console.log(result)
      console.log(result[0].data[1])
      for (let row of result[0].data) {
        if (row.indexOf(text) >= 0) {
          console.log('found text in ' + row)
          return true;
        }
      }
      return false
    },
    runDBQuery(query) {
      return queryTestDb(query, config)
    }
  });

  return config;
}