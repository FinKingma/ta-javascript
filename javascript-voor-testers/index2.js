fs = require('fs')
var Calculator2 = require('./src/calculator2')

let calculator = new Calculator2();

fs.readFile('./input.txt', 'utf8', function(err,data) {
    let args = data.split(',')

    if (args.length !== 2) {
        return console.log('please specify exactly 2 numbers')
    } else {
        calculator.doMagic("journey_1_snapshot.xml", "abcd_journey-1_15-07-2021_16-14-01.xml").then((res,err) => {
            if (err) {
                console.log('error', err)
            } else {
                console.log(res)
            }
        })
    }
})
console.log('laatste regel')