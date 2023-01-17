const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    let calculator = new Calculator();
    let result = calculator.sum([1, 2])
    expect(result).toBe(3);
});

test('adds "1" and "5" to equal 6', () => {
    let calculator = new Calculator();
    let result = calculator.sum(['1', '5'])
    expect(result).toBe(6);
});