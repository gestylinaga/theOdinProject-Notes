// Rock Paper Scissors - Project for 'Basics' Section

// Header / Prompt
console.log("Rock Paper Scissors! 🪨 📃 ✂️ ");
console.log("5 Rounds! Most Rounds Wins!");

// Random computer choice function
function getComputerChoice() {
  const choices = [ // List of RPS choices
    "rock",
    "paper",
    "scissors"
  ];
  // Return valid random choice from list
  return choices[Math.floor(Math.random() * choices.length)];
};

// Player choice from browser prompt
function getPlayerChoice() {
  // while loop for user input validation
  let playerChoice;
  while (true) {
    playerChoice = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
      break // break on valid option
    } else {
      alert("Not a Valid Option"); // browser alert on invalid option
    };
  }
  // Return valid player choice
  return playerChoice;
};

/* 
  // -- Game Functions --  //
*/

// Starting scores
let playerScore = 0;
let computerScore = 0;

// Single round function
function playRound() {
  // 'choices' function calls
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  // Tie
  if (playerSelection == computerSelection) {
    return "It's a tie"
  }
  // Player wins
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++
    return "You win this round, Rock beats Scissors!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++
    return "You win this round, Paper beats Rock!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++
    return "You win this round, Scissors beats Paper!"
  // Player loses
  } else {
    computerScore++
    return `You lose, ${computerSelection} beats ${playerSelection}`
  };
};

// Main game function
function game() {
  // 5 game rounds
  for (let i = 0; i < 5; i++) {
    console.log(`Round: ${i+1} 🥊🥊\nYou: ${playerScore} | Computer: ${computerScore}`);
    let results = playRound();
    console.log(results);
  }
  // Displaying results
  if (playerScore > computerScore) {
    console.log("You Win! 5 rounds won! 🥳");
  } else if (computerScore > playerScore){
    console.log("You Lose! Robots Rule, Humans drool! 🤖");
  } else {
    console.log("Tie Game! Unlucky! 🤨");
  }
};


game();
