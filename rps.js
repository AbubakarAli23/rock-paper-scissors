function getComputerChoice() {
    const move = Math.random();
    if (move <= 0.3) {
        return "rock";
    } else if (move <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Choose a move: rock, paper, or scissors");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return 'draw';
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        return 'computer';
    } else {
        return 'human';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const result = playRound(computerSelection, humanSelection);

        if (result === 'computer') {
            computerScore++;
            alert(`Computer wins! ${computerSelection} beats ${humanSelection}`);
        } else if (result === 'human') {
            humanScore++;
            alert(`You win! ${humanSelection} beats ${computerSelection}`);
        } else {
            alert(`It's a draw! Both chose ${computerSelection}`);
        }
    }

    if (humanScore > computerScore) {
        alert("You win the game!!");
    } else if (computerScore > humanScore) {
        alert("You lose the game!!");
    } else {
        alert("The game is a tie!!");
    }

    alert(`Final score: You ${humanScore} - Computer ${computerScore}`);
}

playGame();