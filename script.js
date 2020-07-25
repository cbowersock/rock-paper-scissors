let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const currentScore = document.querySelector('#currentscore');
const gameInfo = document.querySelector('#gameinfo');
const scoreDisplay = document.createElement('h1');
const results = document.createElement('h3');
const gameOver = document.createElement('h1');
const playAgain = document.createElement('button');

playAgain.textContent = 'Play Again!';

gameInfo.appendChild(scoreDisplay);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    })
})

playAgain.addEventListener('click', () => {
    location.reload();
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = "It's a dang tie!!";
        displayScore()
        checkWinner();
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            displayScore()
            checkWinner();
        } else {
            playerScore++;
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            displayScore()
            checkWinner();
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection ==='scissors') {
            computerScore++;
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            displayScore()
            checkWinner();
        } else {
            playerScore++
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            displayScore()
            checkWinner();
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            displayScore()
            checkWinner();
        } else {
            playerScore++
            results.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
            displayScore()
            checkWinner();
        }
    } 
    currentScore.appendChild(results);
}

function checkWinner() {
    if (playerScore == 5) {
        gameOver.textContent = 'Game Over - You Win!';
        gameOver.style.color = 'green';
        gameInfo.appendChild(gameOver);
        gameInfo.appendChild(playAgain);
    } else if (computerScore == 5) {
        gameOver.textContent = 'Game Over - You Lose!';
        gameOver.style.color = 'red';
        gameInfo.appendChild(gameOver);
        gameInfo.appendChild(playAgain);
    }
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * 3)]
    return computerSelection;
}

function displayScore() {
    scoreDisplay.textContent = `Your Score: ${playerScore}  --  Computer Score: ${computerScore}`;
}