const add = function(n1, n2) {
    return n1 + n2;
};

const subtract = function(n1, n2) {
    return n1 - n2;
};

const multiply = function(n1, n2) {
    return n1 * n2;
};

const divide = function(n1, n2) {
    return n1 / n2;
};

let num1;
let num2;
let operator;

const operate = function(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    };
};