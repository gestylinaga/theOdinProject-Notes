// DOM Manipulation excercise
const container = document.querySelector('#container');

// paragraph with red text
let para = document.createElement('p');
para.textContent = "This is in red!";
para.style.color = 'red';
container.appendChild(para)

// h3 header in blue
let blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!"
blueHeader.style.color = 'blue';
container.appendChild(blueHeader)


// new div, pink background, black border
let div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: 1px solid black;');

// header inside div
let newHeader = document.createElement('h1');
newHeader.textContent = "I'm in a div";

// paragraph inside div
let newPara = document.createElement('p');
newPara.textContent = "ME TOO!";

// appending new elements to new div
div.appendChild(newHeader);
div.appendChild(newPara);

// appending new div to 'container'
container.appendChild(div);
