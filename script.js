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

rock.onclick = () => console.log('rock');
paper.onclick = () => console.log('paper');
scissors.onclick = () => console.log('scissors');
 
