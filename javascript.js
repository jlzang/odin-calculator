const add = function (n1, n2) {
    return n1 + n2;
};

const subtract = function (n1, n2) {
    return n1 - n2;
};

const multiply = function (n1, n2) {
    return n1 * n2;
};

const divide = function (n1, n2) {
    return n1 / n2;
};

let num1 = null;
let num2 = null;
let operator = null;
let operator2 = null;
let result;
let shouldResetDisplay = false

const operate = function (num1, num2, operator) {
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

let numBtns = document.querySelectorAll(".number");
let opBtns = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector(".equals");
let clearBtn = document.querySelector(".clear");
let display = document.querySelector(".display");

numBtns.forEach((button) => {
    button.addEventListener("click", () => getOperand(button.id));
});

opBtns.forEach((button) => {
    button.addEventListener("click", () => getOperator(button.id));
});

equalsBtn.addEventListener("click", (event) => {
    evaluate();
})

clearBtn.addEventListener("click", () => clear());

function resetDisplay() {
    display.textContent = "";
    shouldResetDisplay = false;
};

function getOperand(number) {
    if (shouldResetDisplay) { resetDisplay() };
    display.textContent += number;
};

function getOperator(selection) {
    if (!num1) {
        num1 = Number(display.textContent);
        shouldResetDisplay = true;
    };
    if (operator) {
        num2 = Number(display.textContent);
        num1 = operate(num1, num2, operator);
        display.textContent = num1;
        num2 = null;
        shouldResetDisplay = true;
    } else {
       operator = selection; 
    }
};

function evaluate() {
    if (!num1) { return };
    if (display.textContent === "") { return };
    num2 = Number(display.textContent);
    display.textContent = operate(num1, num2, operator);
};

function clear() {
    display.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
    operator2 = null;
}


/*let numBtns = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let displayValue = "empty";

numBtns.forEach((item) => {
    item.addEventListener("click", (event) => {
        display.textContent += `${event.target.id}`;
        displayValue = display.textContent;
    });
});

let opBtns = document.querySelectorAll(".operator");

opBtns.forEach(item => {
    item.addEventListener("click", (event) => {
        if (displayValue === "empty") {
            return;
        };
        return operator = `${event.target.id}`;
    })
})
*/
