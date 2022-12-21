// Tic-Tac-Toe 
console.log("by: gesty 🏄");

const playerCreator = (name, symbol) => {
  name = name;
  symbol = symbol;
  return { name, symbol };
};

const gameBoard = {
  createGrid: function() {
    const container = document.querySelector('.container');
    let grid = [];
    for (let i = 0; i < 9; i++) {
      const div = document.createElement('div');
      div.addEventListener('click', () => {
      div.style.background = 'gray';
    });
    grid.push(div);
    container.appendChild(div);
    };
    console.log(grid);
  },
};

const mainGame = {
  start: gameBoard.createGrid(),
  currentPlayer: function() {
    // ...
  },
};

const player1 = playerCreator('Player 1', 'X');
const player2 = playerCreator('Player 2', 'O');
