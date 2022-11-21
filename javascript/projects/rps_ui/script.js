// Rock Paper Scissors revisited - Project for 'Basics' Section

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

// adding event listeners on rps buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

/* 
  -- Game Functions --
*/

// Starting scores
let playerScore = 0;
let computerScore = 0;

// Single round function
function playRound(playerChoice) {
  // 'choices' function calls
  let computerSelection = getComputerChoice();
  let playerSelection = playerChoice
  let resultText;

  // Tie
  if (playerSelection == computerSelection) {
    resultText = "It's a tie"
  }
  // Player wins
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++
    resultText = "You win this round, Rock beats Scissors!"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++
    resultText = "You win this round, Paper beats Rock!"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++
    resultText = "You win this round, Scissors beats Paper!"
  // Player loses
  } else {
    computerScore++
    resultText = `You lose, ${computerSelection} beats ${playerSelection}`
  };

  // displaying results
  let container = document.querySelector('div');
  let resultDiv = document.createElement('div');
  resultDiv.textContent = resultText;
  container.appendChild(resultDiv);

  // displaying score
  let scoreText = document.createElement('h3');
  scoreText.textContent = `You: ${playerScore} , Computer: ${computerScore}`;
  container.appendChild(scoreText);

  // Displaying final results
  let finalScore = document.createElement('h1');
  if (playerScore == 5) {
    finalScore.textContent = "You Win! 5 rounds won! 🥳";
  } else if (computerScore == 5){
    finalScore.textContent = "You Lose! Robots Rule, Humans drool! 🤖";
  };
  container.appendChild(finalScore);
};
