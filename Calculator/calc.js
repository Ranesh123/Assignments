let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate(operator) {
    if (currentOperator !== "" && currentInput !== "") {
        if (currentOperator === '+') {
            result += parseFloat(currentInput);
        } else if (currentOperator === '-') {
            result -= parseFloat(currentInput);
        } else if (currentOperator === '*') {
            result *= parseFloat(currentInput);
        } else if (currentOperator === '/') {
            result /= parseFloat(currentInput);
        }
    } else if (currentInput !== "") {
        result = parseFloat(currentInput);
    }
    if (operator === '=') {
        currentInput = String(result);
        currentOperator = "";
    } else {
        currentInput = "";
        currentOperator = operator;
    }
    display.value = currentInput;
}

function clearDisplay() {
    display.value = "";
    currentInput = "";
    currentOperator = "";
    result = 0;
}
