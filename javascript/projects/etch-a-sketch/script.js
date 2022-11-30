// Etch-a-Sketch
console.log("by: gesty 🏄");

const container = document.querySelector('.container');

// creating div grid
function createDivGrid(gridNum) {
  // setting grid template based on number of divs
  let gridTemplate = '1fr '.repeat(Math.sqrt(gridNum));
  container.setAttribute('style', `grid-template-columns: ${gridTemplate}`)

  // creating 'blank' divs
  for (let i = 0; i < gridNum; i++) {
    let div = document.createElement('div');
    div.classList.add('blank');
    container.append(div);

    // hover effect on divs
    div.addEventListener('mouseover', () => {
      //div.classList.remove('blank');
      div.classList.add('filled');
    })
  }
}
createDivGrid(16 * 16);

// Grid Squares button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  // input validation for prompt
  let newNum;
  while (true) {
    newNum = prompt("How many grid squares do you want?\n" + 
    "1-100 (for one side)");
    if (newNum >= 1 && newNum <= 100) {
      break;
    } else {
      alert("Not a valid choice, try again");
    };
  };

  // remove old grid
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  // create new grid
  createDivGrid(newNum * newNum);
})
