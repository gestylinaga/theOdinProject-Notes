// Calculator
console.log('by: gesty 🏄');

/* TODO
  * round answer on display overflow
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
  // if trying to divide by zero
  if (b == 0) {
    return "Nice try Satan..."
  } else {
    return a / b;
  }
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
  return result;
}

// Result display div
const resultsDiv = document.querySelector('.results');

let tempNumber = ''; // allows for numbers >= 10
// Saving inputs into arrays
let numberList = [];
let operatorList = [];

// Event listeners for number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tempNumber += button.innerHTML; // add number to tempNumber
    resultsDiv.append(button.innerHTML); // add number to display
  })
})

// Event listeners for operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    numberList.push(parseInt(tempNumber)); // add tempNumber to numberList
    operatorList.push(button.id) // add operator to operatorList
    resultsDiv.append(` ${button.innerHTML} `); // add operator to display
    tempNumber = ''; // reset tempNumber
  })
})

// Event listener on 'clear' button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  // resets everything back to default / blank
  resultsDiv.textContent = '';
  tempNumber = '';
  numberList = [];
  operatorList = [];
})

// Event listener on 'equals' button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
  numberList.push(parseInt(tempNumber));
  
  // while loop to allow multiple operations in single equation
  while (numberList.length > 2) {
    let tempResult = operate(numberList[0], numberList[1], operatorList[0]);
    numberList.shift(); // removes first array item
    operatorList.shift(); // removes first array item
    numberList[0] = tempResult; // sets tempResult as new first array item
  }

  // Final result when number array only has 2 items left
  let finalResult = operate(numberList[0], numberList[1], operatorList[0]);
  resultsDiv.textContent = finalResult;
  tempNumber = finalResult; // sets solution to new tempNumber

  // reset back to blank defaults
  numberList = [];
  operatorList = [];
})
