// Etch-a-Sketch
console.log("by: gesty 🏄");

/* TODO
  * grid square limit (100x100)
    - input validation on prompt
  * '.container' fixed width/height
*/

const container = document.querySelector('.container');

// creating div grid
function createDivGrid(gridNum) {
  for (let i = 0; i < gridNum; i++) {
    let div = document.createElement('div');
    div.classList.add('blank');
    container.append(div);

    // hover effect
    div.addEventListener('mouseover', () => {
      //div.classList.remove('blank');
      div.classList.add('filled');
    })
  }
}
createDivGrid(16); // 16 == 4x4 grid

// Grid Squares button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  let newNum = prompt("How many grid squares do you want?\n" + 
    "1-10 (for one side)");

  // remove old grid
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  // create new grid
  createDivGrid(newNum * newNum);

  // new container dims / grid template
  let newTemplate = '100px '.repeat(newNum);
  container.setAttribute('style', `grid-template-columns: ${newTemplate}`)
})
