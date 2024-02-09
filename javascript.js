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
let currentDisplay = null;
let result;

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

numBtns.forEach((item) => {
    item.addEventListener("click", (event) => {
        updateDisplay(event);
    });
});

opBtns.forEach((item) => {
    item.addEventListener("click", (event) => {
        getOperator(event);
    });
});

equalsBtn.addEventListener("click", (event) => {
    evaluate();
})

function updateDisplay(event) {
    display.textContent += `${event.target.id}`;
    currentDisplay = display.textContent;
    if (!num1) {
        num1 = Number(currentDisplay);
        return;
    } else {
        display.textContent = "";
        display.textContent += `${event.target.id}`;
        currentDisplay = display.textContent;
        num2 = Number(currentDisplay);
        return;
    }
};

function getOperator(event) {
    if (!operator) {
        operator = event.target.id;
        return;
    } else {
        operator2 = event.target.id;
    }
};

function evaluate() {
    if (!num1 || !num2) {
        return;
    } else if (operator2) {
        operator = operator2;
        return result = operate(num1, num2, operator);
    } else {
        return result = operate(num1, num2, operator);
    }
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
