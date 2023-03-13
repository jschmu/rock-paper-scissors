let playerScore = 0;
let computerScore = 0;
const pScoreBox = document.querySelector('.player');
const cScoreBox = document.querySelector('.computer');
const container = document.querySelector('.container');
const result = document.createElement('div');
result.classList.add('result');   
container.appendChild(result);                                   
const buttons = document.querySelectorAll('button'); //creates a nodelist
buttons.forEach(button => button.addEventListener('click', playRound));

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    let choice = 'paper';
    if (num < 33) {
        choice = 'rock';
    }   else if (num > 66) {
        choice = 'scissors';
    }   else;
    return choice;
}

function playRound(e) {          
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.innerHTML.toLowerCase();
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
        }   else if (computerSelection === "scissors") {
            computerScore += 1;
        }   else;
    }   else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore += 1;
            }   else if (computerSelection === 'scissors') {
                playerScore += 1;;
            }   else;
    }   else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                playerScore += 1;
            }   else if (computerSelection === 'rock') {
                computerScore += 1;
            }   else;
    }

    cScoreBox.textContent = `The computer has ${computerScore} points`;
    pScoreBox.textContent = `You have ${playerScore} points`;
    
    if (computerScore === 5) {
        result.textContent = 'Computer wins!'
    }   else if (playerScore === 5) {
        result.textContent = 'Player wins!';
    }   else;
}
