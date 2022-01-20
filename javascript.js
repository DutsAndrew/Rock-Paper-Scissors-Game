// variables for the buttons. When passing an ID or Class into a selector, ids use the "#" and class uses a "."
const buttons = document.querySelectorAll('.choices');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// variables for div and text in HTML
const selections = document.querySelector('#selections');
const roundOutcome = document.querySelector('#roundOutcome');
const points = document.querySelector('#points');
const gameOver = document.querySelector('#gameOver');

// Event listeners that listen for a click on the buttons: rock, paper, and scissors. The arrow function sends the 'click', to runGame with the parameter "rock", "paper", or "scissors".
rock.addEventListener('click', () => runGame("rock"));
paper.addEventListener('click', () => runGame("paper"));
scissors.addEventListener('click', () => runGame("scissors"));

// place holders for scoreboard
let playerScore = 0;
let computerScore = 0;

// const rps used as the baseline to refer to the 3 strings that can be used in the game.
const rps = ["rock", "paper", "scissors"];

// function computerPlay() is used to select a random string from "rps". Math.Floor sets the number to 0, since Math.Random will select a number between 0 and 1; creating a decimal. Now that Math.Floor has set it to 0 you can fill the function with Math.Random and multiply by rps.length, which is 0-2, since the first string: "Rock" is [0] in the array set. "Paper" is [2]. And "Scissors" is [3].
function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

// function playRound takes parameters of "playerSelection, computerSelection" to decide who wins the round. playerSelection is inputted through a prompt and is looking for "Rock, Paper, or Scissors". computerSelection is running the computerPlay() function to randomally select "Rock, Paper, Scissors" from the rps array.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
    roundOutcome.textContent = "It was a tie, you both choose rock."
    points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "It was a tie, you both choose scissors."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "paper") {
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "It was a tie, you both choose paper."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You lose, paper beats rock."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You win, rock beats scissors."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You win, paper beats rock."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You lose, scissors beats paper."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You lose, rock beats scissors."
      points.TextContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  } else if (playerSelection === "Scissors" && computerSelection === "paper") {
      playerScore++;
      selections.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}.`
      roundOutcome.textContent = "You win, scissors beats paper."
      points.textContent = `User Score: ${playerScore} - Computer Score: ${computerScore}`
  }
}

// check if the game has ended.
function endGame() {
  return playerScore === 5 || computerScore === 5
};

// resets game if endGame() conditions are met in runGame().
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameOver.textContent = `New Game! User Score: ${playerScore} - Computer Score: ${computerScore}`;
}

// Checks if there is a winner, sends out a text with scores if there is.
function decideWinner() {
  if (playerScore === 5) {
    gameOver.textContent = `Game over. Player Wins! Player Score: ${playerScore} -- Computer Score: ${computerScore}`;
  } else if (computerScore === 5) {
    gameOver.textContent = `Game over. Computer Wins! Better luck next time. Player Score: ${playerScore} -- Computer Score: ${computerScore}`;
  }
}

// runGame is taking in a parameter 'playerSelection', so even though there is no variable defining playerSelection, this function will define it when it passes the parameter. Currently, the addEventListeners at the top of the page are sending "rock", "paper", or "scissors" to this code that will be passed as the playerSelection on a 'click'. From here runGame will check the endGame() function to see if the playerScore or computerScore === 5, if it does it will call resetGame() and return user scores to 0 and send the accompanying text. If those conditions aren't met then the runGame() function will continue gathering the computerSelection through the computerPlay() function. Once both the playerSelection and the computerSelection have been gathered both will be sent into the playRound() function as parameters. Once the playRound() function runs it will then finalize the last call: decideWinner() to see if there is a winner, else it will stop and wait for the user to register another click to start another round.
function runGame(playerSelection) {
  if(endGame()) {
    resetGame();
  }
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection)
  decideWinner();
};