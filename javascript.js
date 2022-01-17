const buttons = document.querySelector('#choices');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


// const rps used as the baseline to refer to the 3 strings that can be used in the game.

const rps = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

// function computerPlay() is used to select a random string from "rps". Math.Floor sets the number to 0, since Math.Random will select a number between 0 and 1; creating a decimal. Now that Math.Floor has set it to 0 you can fill the function with Math.Random and multiply by rps.length, which is 0-2, since the first string: "Rock" is [0] in the array set. "Paper" is [2]. And "Scissors" is [3].

function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

const computerSelection = computerPlay().toLowerCase();

document.getElementById("rockBtn").addEventListener("click", playerSelection);

// function playRound takes parameters of "playerSelection, computerSelection" to decide who wins the round. playerSelection is inputted through a prompt and is looking for "Rock, Paper, or Scissors". computerSelection is running the computerPlay() function to randomally select "Rock, Paper, Scissors" from the rps array.

function playRound(playerSelection, computerSelection) {
  } if (playerSelection === "rock" && computerSelection === "rock") {
    alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
    It was a tie, you both choose rock.
    User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      It was a tie, you both choose scissors.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "paper" && computerSelection === "paper") {
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      It was a tie, you both choose paper.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++
      alert (`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You lose, paper beats rock.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++  
      alert (`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You win, rock beats scissors.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You win, paper beats rock.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++  
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You lose, scissors beats paper.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++  
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You lose, rock beats scissors.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else if (playerSelection === "Scissors" && computerSelection === "paper") {
      playerScore++  
      alert(`Player selected: ${playerSelection}, Computer selected: ${computerSelection}.
      You win, scissors beats paper.
      User Score: ${playerScore} - Computer Score: ${computerScore}`)
  } else {
      alert("Something went terribly wrong :(")
}

function gameEnd(playerscore, computerScore) {
  if (playerScore === 5) {
    alert(`Game over. Player Wins! ${playerScore}`);
  } else if (computerScore === 5) {
    alert(`Game over. Computer Wins! Better luck next time. ${computerScore}`);
  } else if (playerScore < 5 && computerScore < 5) {
    runGame();
  } else {
    runGame();
  }
}
