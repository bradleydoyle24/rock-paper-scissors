const body = document.querySelector('body');
const choices = document.querySelectorAll('.card');

let playerChoice;
let computerChoice;
let winner;

let resultText = "Click an icon to play the game!";

const resultDiv = document.querySelector(".result");
resultDiv.textContent = resultText;
body.appendChild(resultDiv);

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.id;
    computerChoice = getComputerChoice();

    winner = getWinner(computerChoice, playerChoice);
    changeScore(winner);

    resultText = getVictoryMessage(computerChoice, playerChoice, winner);

    endGame();

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


const playerScoreDiv = document.querySelector(".points.player");
const computerScoreDiv = document.querySelector(".points.computer");

let playerPoints = 0;
let computerPoints = 0;
playerScoreDiv.textContent = `${playerPoints}`;
computerScoreDiv.textContent = `${computerPoints}`;

function changeScore (winner) {
  if (winner === 'player') {
    playerPoints++;
    playerScoreDiv.textContent = `${playerPoints}`;
  } else if (winner === 'computer') {
    computerPoints++;
    computerScoreDiv.textContent = `${computerPoints}`;
  }
}

// Function to end games.
// look at each score.
// When one score reaches 5, end game, and reset scores.

function endGame() {
  if (playerPoints === 5 || computerPoints === 5) {
    if (playerPoints > computerPoints) {
      resultText = 'You win the game!';
      playerPoints = 0;
      computerPoints = 0;
      playerScoreDiv.textContent = `${playerPoints}`;
      computerScoreDiv.textContent = `${computerPoints}`;
    } else {
      resultText = 'Computer wins the game!';
      playerPoints = 0;
      computerPoints = 0;
      playerScoreDiv.textContent = `${playerPoints}`;
      computerScoreDiv.textContent = `${computerPoints}`;
    }
  }
}