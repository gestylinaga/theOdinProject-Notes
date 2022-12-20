# Tic-Tac-Toe 
a Tic-Tac-Toe game you can play in the browser -
Project for 'Organizing your JavaScript Code' Section

## Prompt
1. Set up HTML, CSS, and JavaScript files
2. Store gameboard as an array, inside of a gameboard object. Also create an 
object for controlling the flow of the game.
  - Main goal is to have as *little* global code as possible. Try putting 
  everything inside a module / factory.
  - If you only need **one** of something (gameboard, displayController), use 
  a module. If you need **multiples** of something (players), use factories
3. Write a JavaScript function that will render the contents of the gameboard 
array to the HTML webpage (fill array with *dummy* 'X's and 'O's)
4. Build function to allow players to add marks to specific spots on the board,
then tie it to the DOM, letting players click on the gameboard to place markers.
Don't forget to disallow players from marking spots that are already taken.
5. Write the logic that checks for game over (3 in a row).
6. Clean up the interface to allow players to input their names, include a 
button to start / restart the game. Add a display element that congratulates the 
winning player.
7. **Optional**: Create computer 'AI'
  - start by getting computer to make random legal moves
  - make the computer 'AI' *smarter*, see 
  [this](https://en.wikipedia.org/wiki/Minimax) link for help.
