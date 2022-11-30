// Calculator
console.log('by: gesty 🏄');

/* TODO
  * add display
  * fix grid template
  * add event listeners to number buttons
*/

// Basic math functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// Function to handle operations
function operate(a, b, op) {
  let result;
  if (op == 'add') {
    result = add(a, b);
  } else if (op == 'subtract') {
    result = subtract(a, b);
  } else if (op == 'multiply') {
    result = multiply(a, b);
  } else {
    result = divide(a, b);
  }
  console.log(result);
}
operate(2, 4, 'add'); // test function call


// Function to populate display


// Event listeners for operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
  })
})
