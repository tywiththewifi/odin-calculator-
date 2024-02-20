// Logic for addition goes here

const add = (a, b) => a + b;

// Logic for subtraction goes here

const subtract = (a, b) => a - b;

// Logic for multiplication goes here

const mult = (a, b) => a * b;

// Logic for division goes here

const divide = (a, b) => a / b;

// Operator logic goes here

function operate(op, num1, num2) {
    switch(op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return mult(num1, num2);
        case '/':
            return divide(num1, num2);
        default: 
            return "Invalid operator";
    }
}

