class Calculator {

    // constructor
    constructor() {

    }

    // methods
    sum(input) {
        let result = 0;
        for (let num of input) {
            result = result + +num;
        }
        return result;
    }
}

module.exports = Calculator