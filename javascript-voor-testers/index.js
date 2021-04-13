fs = require('fs')
var Calculator = require('./src/calculator')

let calculator = new Calculator();

fs.readFile('./input.txt', 'utf8', function(err,data) {
    let args = data.split(',')

    if (args.length !== 2) {
        return console.log('please specify exactly 2 numbers')
    } else {
        let result = calculator.sum(+args[0], +args[1])
        console.log(result)
    }
})
console.log('laatste regel')