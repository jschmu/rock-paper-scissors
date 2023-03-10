function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    let choice = 'paper';
    if (num < 33) {
        choice = 'rock';
    }   else if (num > 66) {
        choice = 'scissors';
    }   else ;
    return choice;
}
//This returns a random choice for the player
/*function getPlayerChoice() {
    let num = Math.floor(Math.random() * 100);
    let choice = 'paper';
    if (num < 33) {
        choice = 'rock';
    }   else if (num > 66) {
        choice = 'scissors';
    }   else ;
    return choice;
}*/

function playRound() {          //It doesn't matter what you name the parameters
    let computerSelection = getComputerChoice();
    //let userInput = prompt("Do you choose paper, rock or scissors?");
    //let playerSelection = 'userInput.toLowerCase();'
    let playerSelection = 'paper';
    console.log('The computer chose ' + computerSelection);
    console.log('You chose ' + playerSelection)
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'Player wins!';
        }   else if (computerSelection === "scissors") {
            return 'Computer wins!';
        }   else {
            return 'It is a draw.';
        }
    }   else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                return 'Computer wins!';
            }   else if (computerSelection === 'scissors') {
                return 'Player wins!';
            }   else {
                return 'It is a draw.';
            }
    }   else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                return 'Player wins!';
            }   else if (computerSelection === 'rock') {
                return 'Computer wins!';
            }   else {
                return 'It is a draw.';
            }
    }
}

//console.log(playRound());

function getUserChoice(e) {
    let userChoice = e.target.innerHTML.toLowerCase();
    console.log(userChoice);
    return userChoice;
};

const buttons = document.querySelectorAll('button'); //creates a nodelist
buttons.forEach(button => button.addEventListener('click', getUserChoice));

/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let result = playRound(); //playRound() needs to be inside the loop or the first result gets repeated 4 times
    if (result === "Player wins!") {
        playerScore = playerScore + 1;
        console.log("You have " + playerScore);
    }   else if (result === "Computer wins!") {
            computerScore = computerScore + 1;
            console.log("The computer has " + computerScore);
        } else if (result === "It is a draw.");
    }

    if (playerScore > computerScore) {
        alert("You defeated the computer.");
    }   else if(computerScore > playerScore) {
        alert("You've been defeated by the computer.");
    }   else {
        alert("It's a tie.")
    }
    }
game();*/