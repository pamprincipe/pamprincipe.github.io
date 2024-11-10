let firstNumber = null;  // Store the first number
let operator = null;     // Store the operator
let secondNumber = null; // Store the second number
let operatorClicked = false;  // Track if an operator was clicked

// Function to display the value on the screen
function displayValue(button) {
    const output = document.getElementById('output');
    
    // If operator was clicked, clear the display for the second number
    if (operatorClicked) {
        output.value = button.value;  // Start displaying second number
        operatorClicked = false;  // Reset the flag after typing begins
    } else {
        if (output.value === '0') {
            output.value = button.value;  // Replace '0' with the digit
        } else {
            output.value += button.value;  // Append subsequent digits
        }
    }
}

// Function to handle operator buttons (+, -, /, *)
document.querySelectorAll('.btn-operator').forEach(button => {
    button.addEventListener('click', function() {
        const output = document.getElementById('output');
        
        if (firstNumber === null) {
            firstNumber = parseFloat(output.value);  // Store the first number
        }
        
        operator = this.value;  // Set the operator (+, -, /, *)
        operatorClicked = true;  // Set flag to indicate operator was clicked
        // Do not clear the display here, so the firstNumber is still shown
    });
});

// Function to calculate the result when "=" is clicked
function calculate() {
    const output = document.getElementById('output');
    secondNumber = parseFloat(output.value);  // Get the second number
    
    switch (operator) {
        case '+':
            output.value = firstNumber + secondNumber;  // Perform addition
            break;
        case '-':
            output.value = firstNumber - secondNumber;  // Perform subtraction
            break;
        case '*':
            output.value = firstNumber * secondNumber;  // Perform multiplication
            break;
        case '/':
            if (secondNumber !== 0) {
                let divide = firstNumber / secondNumber; // Perform division  
                output.value = divide; 
            } else {
                output.value = 'Error';  // Handle division by zero
            }
            break;
        default:
            output.value = 'Error';  // Handle any unexpected cases
    }
    
    firstNumber = null;  // Reset firstNumber for the next operation
    secondNumber = null;  // Reset secondNumber
    operator = null;  // Reset operator
    operatorClicked = false;  // Reset operatorClicked flag
}

function clearDisplay() {
    document.getElementById("output").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("output").value;
    document.getElementById("output").value = currentValue.slice(0, -1);
}

function toPercent() {
    let currentValue = document.getElementById("output").value;
    document.getElementById("output").value = currentValue / 100;
}