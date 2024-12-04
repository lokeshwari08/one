let currentInput = "";  // This will store the current input
let previousInput = ""; // This will store the previous input
let operator = "";      // This stores the operator (+, -, *, /)

// Append number to the current input
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Append operator to the current input
function appendOperator(op) {
  if (currentInput === "") return; // Don't append if there's no number
  operator = op;
  previousInput = currentInput; // Store the current input
  currentInput = "";            // Reset current input for the next number
  updateDisplay();
}

// Clear the display and reset inputs
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}

// Perform the calculation when "=" is clicked
function calculateResult() {
  if (previousInput === "" || currentInput === "") return; // Make sure both sides exist
  let result;

  switch (operator) {
    case "+":
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case "/":
      if (currentInput === "0") {
        alert("Cannot divide by 0");
        clearDisplay();
        return;
      }
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }

  currentInput = result.toString(); // Update current input to the result
  previousInput = "";
  operator = "";
  updateDisplay();
}

// Update the display with the current input
function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
