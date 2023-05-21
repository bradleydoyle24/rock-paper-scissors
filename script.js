function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  console.log(number);
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

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getPlayerChoice() {
  let playerChoice = prompt("Will you play 'Rock', 'Paper', or 'Scissors'?" );
  let choiceCheck = playerChoice.toLowerCase();
  console.log(choiceCheck);
  if (choiceCheck !== 'rock' && choiceCheck !== 'scissors' && choiceCheck !== 'paper') {
    console.log("You must choose 'Rock', 'Paper', or 'Scissors'!");
    getPlayerChoice();
  } 
  else {
    return playerChoice;
  }
}

let playerChoice = getPlayerChoice();
console.log(playerChoice);