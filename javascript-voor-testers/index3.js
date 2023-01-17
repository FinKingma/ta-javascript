class Calculator {
  // data
	constructor() {
	}

  sum(input) {
    let total = 0;
    for (let value of input) {
      total = total + value
    }
    return total
  }
  amountOfValues(input) {
    return input.length
  }
  
}

let calculator = new Calculator()
let antwoord = calculator.sum([1,3])
console.log('antwoord: ' + calculator.amountOfValues([1,3,4]))
