

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

const buttons = document.querySelectorAll("button");




function playRound(humanChoice) {
    const computerSelection = getComputerChoice()
    

    let hChoice = humanChoice;
    let cChoice = computerSelection.toLowerCase();
    let pWinner = false;
    let cWinner = false;
    let tieBool = false;
    let winner = "";

    const resultDiv = document.getElementById("results");

    let resultMessage = 'You chose: ' + hChoice  + "<br>Computer chose: " + cChoice + "<br>";



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

    resultMessage += "The winner is " + winner;
    //console.log("The player chose " + hChoice + " and the computer chose " + cChoice + ", therefore the winner is " + winner);
    resultDiv.innerHTML = resultMessage;
    return winner;

}

//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection,computerSelection);

