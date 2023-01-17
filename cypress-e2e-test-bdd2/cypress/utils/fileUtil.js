
const path = require('path');
const downloadDirectory = path.join(__dirname, '..', 'downloads');
var xlsx = require('node-xlsx');

const isFileDownloadedWith = (text, ms) => {
  return new Promise((resolve, reject) => {
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
          resolve(true);
        }
      }
      reject(false);
  });
}

exports.isFileDownloadedWith = isFileDownloadedWith;
