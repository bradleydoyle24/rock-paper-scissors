const body = document.querySelector('body');
const choices = document.querySelectorAll('.card');

let playerChoice;
let computerChoice;

let resultText = "Click an icon to play the game!";

const resultDiv = document.querySelector(".result");
resultDiv.textContent = resultText;
body.appendChild(resultDiv);

choices.forEach(choice => {
  choice.addEventListener('click', ()=> {
    playerChoice = choice.id;
    computerChoice = getComputerChoice();
    let winner = playSingleRound(computerChoice, playerChoice);

    resultText = getVictoryMessage(computerChoice, playerChoice, winner);

    resultDiv.textContent = resultText;
    body.appendChild(resultDiv);
  });
});

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "rock";
  }
  else if (number === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

// Turn playSingleRound into a function that gets winner.
// Make another function that assigns text to resultDiv.

// Function that gets winner
  // Takes playerChoice and computerChoice
  // compares like in current function
  // Instead of console.log, return a number?

function playSingleRound(computerChoice, playerChoice) {
  if (computerChoice !== playerChoice) {
    if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
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

// Print function takes the number as an argument
  // Each printed message is assigned to a number??
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

