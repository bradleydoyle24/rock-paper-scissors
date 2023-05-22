let computerScore = 0;
let playerScore = 0;

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

let computerChoice = getComputerChoice();
console.log("Computer choice: " + computerChoice);

function getPlayerChoice() {
  let playerChoice = prompt("Will you play 'Rock', 'Paper', or 'Scissors'?" );
  let choiceCheck = playerChoice.toLowerCase();
  if (choiceCheck !== 'rock' && choiceCheck !== 'scissors' && choiceCheck !== 'paper') {
    console.log("You must choose 'Rock', 'Paper', or 'Scissors'!");
    getPlayerChoice();
  } 
  else {
    return choiceCheck;
  }
}

let playerChoice = getPlayerChoice();
console.log("Player choice: " + playerChoice);

function round(playerSelection, computerSelection) {
  playerSelection = playerChoice;
  computerSelection = computerChoice;

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log("Rock loses to Paper, Computer Wins!");
      computerScore += 1;
    }
    else if (computerSelection === 'scissors') {
      console.log("Rock beats Scissors, You Win!");
      playerScore += 1;
    }
    else {
      console.log("Rock versus Rock, it's a Tie!");
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log("Paper beats Rock, Player Wins!");
      playerScore += 1;
    }
    else if (computerSelection === 'scissors') {
      console.log("Paper loses to Scissors, Computer Wins!")
      computerScore += 1;
    }
    else {
      console.log("Paper versus Paper, it's a Tie!");
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log("Scissors loses to Rock, Computer Wins!");
      computerScore += 1;
    }
    else if (computerSelection === 'paper') {
      console.log("Scissors beats Paper, Player Wins!")
      playerScore += 1;
    }
    else {
      console.log("Scissors versus Scissors, it's a Tie!");
    }
  }
  console.log("Player score is : " + playerScore, " and Computer Score is: " + computerScore);
}

round(playerChoice, computerChoice);



