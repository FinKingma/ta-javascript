import { Calculator3 } from './src/calculator3';
import * as fs from 'fs';

const calculator = new Calculator3();


fs.readFile('./input.txt', 'utf8', function(err,data) {
  let args = data.split(',')

  if (args.length !== 2) {
      return console.log('please specify exactly 2 numbers')
  } else {
      console.log('answer: ' + calculator.sum(+args[0], +args[1]));
  }
})