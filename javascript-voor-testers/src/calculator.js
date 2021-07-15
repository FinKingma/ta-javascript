const path = require("path");
const fs = require("fs");
const tool = require("diff-js-xml");

class Calculator {

    // constructor
    constructor() {

    }

    // methods
    sum(a, b) {
        return a+b;
    }

    doMagic(snapshot, download) {
        return new Promise((resolve, reject) => {
            if (download === undefined) {
                reject(new Error("no download file now received"));
            }
    
            const snapshotFullname = path.resolve(__dirname) + "/snapshot/" + snapshot;
            fs.readFile(snapshotFullname, "utf8", function(err, snapData) {
                if (err) {
                    reject(err);
                }
    
                const downloadFullname = path.resolve(__dirname) + "/downloads/" + download;
    
                let waitForFile = setInterval(() => {
                    if (fs.existsSync(downloadFullname)) {
                        clearInterval(waitForFile);
    
                        fs.readFile(downloadFullname, "utf8", function(err, downloadData) {
                            if (err) {
                                reject(err);
                            }
                            const schema = { OmschOverigePriveOnttrekkingen: { skipKey: true } };
                            // const options = {compareElementValues: false}
                            tool.diffAsXml(snapData, downloadData, schema, null, result => {
                                if (result.length > 0) {
                                    for (let err of result) {
                                        console.log("test: " + JSON.stringify(err));
                                    }
                                    reject(new Error(JSON.stringify(result)));
                                } else {
                                    resolve(true);
                                }
                            });
                        });
                    }
                }, 200);
            });
        });
    }
}

module.exports = Calculator