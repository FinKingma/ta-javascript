fs = require('fs')
var Calculator = require('./src/calculator')

let calculator = new Calculator();

fs.readFile('./input.txt', 'utf8', function(err,data) {
    let args = data.split(',')

    if (args.length !== 2) {
        return console.log('please specify exactly 2 numbers')
    } else {
        let result = calculator.sum(+args[0], +args[1])
        // calculator.doMagic("journey_1_snapshot.xml", "abcd_journey-1_15-07-2021_16-14-01.xml").then((res,err) => {
        //     console.log(res)
        // })
        console.log(result)
    }
})
console.log('laatste regel')