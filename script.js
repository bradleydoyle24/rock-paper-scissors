const body = document.querySelector('body');
const choices = document.querySelectorAll('.card');

let playerChoice;
let computerChoice;

let resultText = "Click an icon to play the game!";

const resultDiv = document.querySelector(".result");
resultDiv.textContent = resultText;
body.appendChild(resultDiv);

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.id;
    computerChoice = getComputerChoice();
    let winner = getWinner(computerChoice, playerChoice);

    resultText = getVictoryMessage(computerChoice, playerChoice, winner);

    resultDiv.textContent = resultText;
    body.appendChild(resultDiv);
  });
});

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  }
  else if (number === 2) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

function getWinner(computerChoice, playerChoice) {
  if (computerChoice !== playerChoice) {
    if (playerChoice === 'Rock') {
      if (computerChoice === 'Paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (playerChoice === 'Paper') {
      if (computerChoice === 'Scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
          return 'computer';
        } else {
          return 'player';
        }
    }
  }
  else {
    return 'tie';
  }
}

function getVictoryMessage (computerChoice, playerChoice, winner) {
  let victoryMessage;
  if (winner !== 'tie') {
    if (winner === 'computer') {
      victoryMessage = `Computer played ${computerChoice}, you played ${playerChoice}, computer wins!`;
      return victoryMessage;
    } else {
      victoryMessage = `Computer played ${computerChoice}, you played ${playerChoice}, you win!`;
      return victoryMessage;
    }
  } else {
    victoryMessage = `${playerChoice} vs ${computerChoice}, it\'s a tie!`;
    return victoryMessage;
  }
}



// Create variable for each points
  // .points .player
  // .points .computer
  // Have each score start at 0
// Determine who won game
// Add 1 to their score

const playerPoints = document.querySelector(".points.player");
const computerPoints = document.querySelector(".points.computer");

let playerScore = 0;
let computerScore = 0;

function changeScore (winner) {
  if 
}

playerPoints.textContent = `${playerScore}`;
computerPoints.textContent = `${computerScore}`;