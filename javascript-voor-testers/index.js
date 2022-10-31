fs = require('fs')
var Calculator = require('./src/calculator')

let calculator = new Calculator()

fs.readFile('./input.txt', 'utf8', function (err, data) {
  if (err) {
    console.log('error', err)
    return
  }
  let args = data.split(',')

  let result = calculator.sum(args)
  console.log(result)
})



let numbers = ['1', '3', '5']

numbers = numbers.map(function (e) { return +e });

numbers = numbers.map(e => +e);


throw new Error('Not exactly two digits')