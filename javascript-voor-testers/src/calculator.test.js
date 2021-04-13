const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    let calculator = new Calculator();
    let result = calculator.sum(1, 2)
    expect(result).toBe(3);
});