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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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