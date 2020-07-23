let score = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * 3)]
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a dang tie!!";
    } else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            score++;
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toLowerCase === 'paper') {
        if (computerSelection ==='scissors') {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            score++
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toLowerCase === 'scissors') {
        if (computerSelection === 'rock') {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            score++
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else {
        score -= 100;
        return 'Nice try smartass, you just lost 100 points';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('Pick rock, paper, or scissors');
        console.log(playRound(userChoice, computerPlay()));
    }
    console.log(`Your score: ${score}`);
}