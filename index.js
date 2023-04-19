// Randomly return 'Rock', 'Paper', or 'Scissors'
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

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
// let computerSelection = getComputerChoice();
// let playerSelection = prompt("pick something");
function playRound(playerSelection, computerSelection) {
  let playerStr = playerSelection;
  let computerStr = computerSelection;
  let lowerCompStr = computerStr.toLowerCase();
  let lowerPlayerStr = playerStr.toLowerCase();

  if (lowerPlayerStr === lowerCompStr) {
    tieCount += 1;
    return "It's a tie!";
  }

  if (lowerPlayerStr === "paper" && lowerCompStr === "rock") {
    playerWinCount = playerWinCount + 1;
    return "You win! Paper beats Rock";
  }
  if (lowerPlayerStr === "rock" && lowerCompStr === "paper") {
    computerWinCount += 1;
    return "You lose! Paper beats Rock";
  }

  if (lowerPlayerStr === "scissors" && lowerCompStr === "paper") {
    playerWinCount++;
    return "You win! Scissors beats Paper";
  }

  if (lowerPlayerStr === "paper" && lowerCompStr === "scissors") {
    computerWinCount += 1;
    return "You lose! Scissors beats Paper";
  }

  if (lowerPlayerStr === "scissors" && lowerCompStr === "rock") {
    computerWinCount += 1;
    return "You lose! Rock beats Paper";
  }

  if (lowerPlayerStr === "rock" && lowerCompStr === "scissors") {
    playerWinCount++;
    return "You win! Rock beats Scissors";
  }
}

// step 6.
function game() {
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick something");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "";
  computerSelection = "";
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick something");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "";
  computerSelection = "";
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick something");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "";
  computerSelection = "";
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick something");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "";
  computerSelection = "";
  computerSelection = getComputerChoice();
  playerSelection = prompt("pick something");
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "";
  computerSelection = "";

  if (playerWinCount >= 3 || playerWinCount > computerWinCount) {
    console.log("YOU WIN THE GAME!");
  }
  if (computerWinCount >= 3 || computerWinCount > playerWinCount) {
    console.log("COMPUTER WINS THE GAME!");
  }
  if (tieCount >= 3 || playerWinCount === computerWinCount) {
    console.log("TIE GAME!");
  }

  //   if (playerWinCount > computerWinCount) {
  //     console.log("YOU WIN!");
  //   }
  //   if (computerWinCount > playerWinCount) {
  //     console.log("COMPUTER WINS!");
  //   }
}
game();
