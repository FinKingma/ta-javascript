var fs = require('fs');

let rootDir = './cypress/integration/';
var newFile = 'All.features'
let fileContent = ''
let featureFilenames = []

try {
    fs.unlinkSync(rootDir + newFile)
    //file removed
} catch(err) {
    console.log('All.features was not found')
}

let files = fs.readdirSync(rootDir)

for (var i=0;i<files.length;i++) {
    if (files[i].indexOf('.feature') >= 0) {
        featureFilenames.push(files[i])
    }
}

console.log(featureFilenames)
for (let i=0;i<featureFilenames.length;i++) {
    fs.readFile(rootDir + featureFilenames[i], function read(err, data) {
        if (err) {
            throw err;
        }
        fileContent += data;
        fileContent += '\n\n\n';
        
        if (i === featureFilenames.length-1) {
            fs.writeFileSync(rootDir + newFile, fileContent);
            console.log('generated new bundled feature file')
        }
    });
}