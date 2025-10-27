let mine = "Hello there ";
console.log(mine);
/*
//function getComputerChoice()
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
//console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors");
  return userInput.toLowerCase();
}
//console.log("Your Choice", getHumanChoice )

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }
}

// Run one round
playRound();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Normalize human input to lowercase
  humanChoice = humanChoice.toLowerCase();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}
*/
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors");
    return userInput.toLowerCase();
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final result
  console.log("=== Final Results ===");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("It's a draw!");
  }
}

// Start the game
playGame();


