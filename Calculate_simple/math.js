function add(a, b) {
    return (a + b);
}

function rest(a, b) {
    return (a - b);
}

function multiply(a, b) {
    if (b == 0) {
        console.log("All number thats multiply's by zero is: " + (a * b));
    }
    else {
    return (a * b);
    }
}

function divide(a, b) {
    if (b == 0) {
        console.log("Isn't possible divide by 0");
    }
    else {
        return (a / b);
    }
}

const Math = {
    add,
    divide,
    multiply,
    rest
};
/*
exports.add = add;
exports.divide = divide;
exports.multiply = multiply;
exports.rest = rest;
*/
module.exports = Math;
