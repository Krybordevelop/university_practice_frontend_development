const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const operators = ["+", "-", "*", "/"];

let expression = "";
let justCalculated = false;

function updateDisplay() {
    display.textContent = expression || "0";
}

function addValue(value) {
    if (justCalculated && !operators.includes(value)) {
        expression = "";
    }

    justCalculated = false;

    if (value === ".") {
        const currentNumber = expression.split(/[+\-*/]/).pop();
        if (currentNumber.includes(".")) {
            return;
        }
        if (!currentNumber) {
            expression += "0";
        }
    }

    if (operators.includes(value)) {
        if (!expression && value !== "-") {
            return;
        }
        if (operators.includes(expression.slice(-1))) {
            expression = expression.slice(0, -1) + value;
            updateDisplay();
            return;
        }
    }

    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = "";
    justCalculated = false;
    updateDisplay();
}

function backspace() {
    expression = expression.slice(0, -1);
    justCalculated = false;
    updateDisplay();
}

function calculate() {
    if (!expression || operators.includes(expression.slice(-1))) {
        return;
    }

    try {
        const result = eval(expression);
        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }
        expression = String(result);
        justCalculated = true;
        updateDisplay();
    } catch {
        display.textContent = "Помилка";
        expression = "";
        justCalculated = true;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const { action, value } = button.dataset;

        if (action === "clear") {
            clearDisplay();
        } else if (action === "backspace") {
            backspace();
        } else if (action === "calculate") {
            calculate();
        } else if (value === "%") {
            if (expression && !operators.includes(expression.slice(-1))) {
                expression = String(Number(expression) / 100);
                updateDisplay();
            }
        } else {
            addValue(value);
        }
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/^\d$/.test(key) || key === "." || operators.includes(key)) {
        addValue(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "%") {
        if (expression && !operators.includes(expression.slice(-1))) {
            expression = String(Number(expression) / 100);
            updateDisplay();
        }
    } else {
        return;
    }

    event.preventDefault();
});