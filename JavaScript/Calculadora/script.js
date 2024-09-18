// Function to append a number or operator to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === '0' && number !== '.') {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Function to append an operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    
    // Prevent adding multiple operators consecutively
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

    display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result and display it
function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        // Evaluate the expression and show the result
        display.value = eval(display.value);
    } catch (error) {
        // Show an error message if the expression is invalid
        display.value = 'Error';
    }
}