const choices = document.querySelectorAll('.card');

let playerChoice;
let computerChoice;

choices.forEach(choice => {
  choice.addEventListener('click', ()=> {
    playerChoice = choice.id;
    computerChoice = getComputerChoice();
    playSingleRound(computerChoice, playerChoice);
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

function playSingleRound(computerChoice, playerChoice) {
  if (computerChoice !== playerChoice) {

    if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, computer wins!`);
      } else {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, player wins!`);
      }

    } else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, computer wins!`);
      } else {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, player wins!`);
      }

    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, computer wins!`);
      } else {
        console.log(`You choose ${playerChoice}, computer chooses ${computerChoice}, player wins!`);
      }
    }
  }
  else {
    console.log(`${playerChoice} vs ${computerChoice}, it\'s a tie!`);
  }
}