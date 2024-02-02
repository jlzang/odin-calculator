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
let currentDisplay = null;

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
    })
})
function updateDisplay(event) {
    display.textContent += `${event.target.id}`;
    currentDisplay = display.textContent;
}

function getOperator(event) {
    operator = event.target.id;
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
