// Randomly return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  let computerChoice = "";
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    computerChoice = "Rock";
  }
  if (randomNum === 1) {
    computerChoice = "Paper";
  }
  if (randomNum === 2) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

// 4. Function to play a single round of the game

function playRound(playerSelection, computerSelection) {
  let playerStr = playerSelection;
  let computerStr = computerSelection;
  const lowerCompStr = computerStr.toLowerCase();
  const lowerPlayerStr = playerStr.toLowerCase();

  if (lowerPlayerStr === lowerCompStr) {
    return "It's a tie!";
  }

  if (lowerPlayerStr === "paper" && lowerCompStr === "rock") {
    return "You win! Paper beats Rock";
  }
  if (lowerPlayerStr === "rock" && lowerCompStr === "paper") {
    return "You lose! Paper beats Rock";
  }

  if (lowerPlayerStr === "scissors" && lowerCompStr === "paper") {
    return "You win! Scissors beats Paper";
  }

  if (lowerPlayerStr === "paper" && lowerCompStr === "scissors") {
    return "You lose! Scissors beats Paper";
  }

  if (lowerPlayerStr === "scissors" && lowerCompStr === "rock") {
    return "You lose! Rock beats Paper";
  }

  if (lowerPlayerStr === "rock" && lowerCompStr === "scissors") {
    return "You win! Rock beats Scissors";
  }
}
let compSelection = getComputerChoice();
playRound("PAPER", compSelection);
