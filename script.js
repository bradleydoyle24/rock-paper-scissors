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

function getPlayerChoice() {
  let playerChoice = prompt("Will you play 'Rock', 'Paper', or 'Scissors'?" );
  let choiceCheck = playerChoice.toLowerCase();
  if (choiceCheck !== 'rock' && choiceCheck !== 'scissors' && choiceCheck !== 'paper') {
    console.log("You must choose 'Rock', 'Paper', or 'Scissors'!");
  } 
  else {
    return choiceCheck;
  }
}

function round(playerSelection, computerSelection) {

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log("Rock loses to Paper, Computer wins the round!");
      computerScore += 1;
    }
    else if (computerSelection === 'scissors') {
      console.log("Rock beats Scissors, You win the round!");
      playerScore += 1;
    }
    else {
      console.log("Rock versus Rock, the round is a Tie!");
    }
  }

  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log("Paper beats Rock, Player wins the round!");
      playerScore += 1;
    }
    else if (computerSelection === 'scissors') {
      console.log("Paper loses to Scissors, Computer wins the round!")
      computerScore += 1;
    }
    else {
      console.log("Paper versus Paper, the round is a Tie!");
    }
  }

  else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log("Scissors loses to Rock, Computer wins the round!");
      computerScore += 1;
    }
    else if (computerSelection === 'paper') {
      console.log("Scissors beats Paper, Player wins the round!")
      playerScore += 1;
    }
    else {
      console.log("Scissors versus Scissors, the round a Tie!");
    }
  }
  console.log("Player score is : " + playerScore, " and Computer Score is: " + computerScore);

  return playerScore, computerScore;
}


function game() {
  for (let i = 0; i < 5; i += 1) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    round(playerChoice, computerChoice);
  }
  if (playerScore > computerScore) {
    console.log("Congratulations, you win the game!");
  }
  else if (playerScore < computerScore) {
    console.log("Sorry, the Computer wins the game!");
  }
  else {
    console.log("The game is a tie!");
  }
}

game();



