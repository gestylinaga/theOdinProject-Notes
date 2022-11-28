// Etch-a-Sketch
console.log("by: gesty 🏄");
/* TODO
  * prompt should specify 1 side, function should multiply for square
  * new grid should overwrite old grid
  * grid square limit (100x100)
  * '.container' border instead of blue bg?
  * '.container' fixed width/height
*/
const container = document.querySelector('.container');

// creating div grid
function createDivGrid(gridNum) {
  for (let i = 0; i < gridNum; i++) {
    let div = document.createElement('div');
    div.setAttribute('style', 'background: white;');
    container.append(div);

    // hover effect
    div.addEventListener('mouseover', () => {
      div.setAttribute('style', 'background: black;');
    })
  }
}
createDivGrid(16);

// Grid Squares button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  let newNum = prompt("How many grid squares do you want?");
  createDivGrid(newNum);
})
