//Get computer choice
//Get player choice by listening to what got clicked
//Compare choices
//Increase counter for winner
//At 5 points, determine winner

// Get computer choice

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

// Get player choice by listening to what got clicked
// event listener to click on certain cards
  // Create variables for each ID in html.
  // Function listens for click on ID
  // Returns name in a variable 'playerChoice'


const choices = document.querySelectorAll('.card');

function getPlayerChoice() { 
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      console.log(`function player choice is: ${choice.id}`);
      return choice;
    });
  });
}

getPlayerChoice();

//Compare choices
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