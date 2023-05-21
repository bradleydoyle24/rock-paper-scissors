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
