const body = document.querySelector('body');
const choices = document.querySelectorAll('.card');

let computerChoice;
let winner;

let resultMessage = "Click an icon to play the game!";

const playerScoreDiv = document.querySelector(".points.player");
const computerScoreDiv = document.querySelector(".points.computer");
let playerPoints = 0;
let computerPoints = 0;
playerScoreDiv.textContent = `${playerPoints}`;
computerScoreDiv.textContent = `${computerPoints}`;

const resultDiv = document.querySelector(".result");
resultDiv.textContent = resultMessage;
body.appendChild(resultDiv);


choices.forEach(choice => choice.addEventListener('click', () => {
  playGame(choice.id);
}));

function playGame(playerChoice) {
  computerChoice = getComputerChoice();
  winner = getWinner(computerChoice, playerChoice);
  changeScore(winner);
  resultMessage = getResultMessage(computerChoice, playerChoice, winner);
  endGame()
  resultDiv.textContent = resultMessage;
  body.appendChild(resultDiv);
}

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

function getResultMessage (computerChoice, playerChoice, winner) {
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

function changeScore (winner) {
  if (winner === 'player') {
    playerPoints++;
    playerScoreDiv.textContent = `${playerPoints}`;
  } else if (winner === 'computer') {
    computerPoints++;
    computerScoreDiv.textContent = `${computerPoints}`;
  }
}

function endGame() {
  if (playerPoints === 5 || computerPoints === 5) {
    if (playerPoints > computerPoints) {
      resultMessage = 'You win the game!';
      resetPoints();
    } else {
      resultMessage = 'Computer wins the game!';
      resetPoints();
    }
  }
}

function resetPoints () {
  playerPoints = 0;
  computerPoints = 0;
  playerScoreDiv.textContent = `${playerPoints}`;
  computerScoreDiv.textContent = `${computerPoints}`;
}