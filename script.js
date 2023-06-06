//Get computer choice
//Get player choice by listening to what got clicked
//Compare choices
//Increase counter for winner
//At 5 points, determine winner

let playerScore = 0;
let computerScore = 0;

// Get computer choice

// Get player choice by listening to what got clicked
// event listener to click on certain cards
  // Create variables for each ID in html.
  // Function listens for click on ID
  // Returns name in a variable 'playerChoice'


const choices = document.querySelectorAll('.card');

function getRandomChoice() {
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

function getComputerChoice() {
  computerChoice = getRandomChoice();
  console.log(`computer choice function is ${computerChoice}`)
};

function getPlayerChoice() { 
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      console.log(`function player choice is: ${choice.id}`);
      return choice.id;
    });
  });
}


function round(computerChoice, playerChoice) {
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


choices.forEach(choice => {
  choice.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    round(computerChoice, playerChoice);
  });
});

//Compare choices