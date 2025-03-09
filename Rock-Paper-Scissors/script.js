

const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;


function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
}

function getComputerChoice() {
    let index = getRandomInt();
    let computerChoice = choices[index];
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper or Scissors");
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice,computerChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();
    let pWinner = false;
    let cWinner = false;
    let tieBool = false;
    let winner = "";

    if(hChoice == cChoice) {
        winner = "Tie";
    }
    else if(hChoice == "rock" && cChoice != "paper" ){
        winner = "Player";
    }
    else if(hChoice == "scissors" && cChoice != "rock"){
        winner = "Player";
    }
    else if(hChoice == "paper" && cChoice != "scissors"){
        winner = "Player"
    }
    else {
        winner = "Computer";
    }

    console.log("The player chose " + hChoice + " and the computer chose " + cChoice + ", therefore the winner is " + winner);
    return winner;

}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection,computerSelection);

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i =1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let winner = playRound(humanSelection,computerSelection);
        if(winner == "Player"){
            playerScore++;
        }
        else if(winner == "Computer"){
            computerScore++;
        }
        else {
            console.log("Both choices were the same resulting in a tie.");
        }

        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }
    
}

playGame();