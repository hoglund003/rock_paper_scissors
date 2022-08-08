const rock_btn = document.querySelector('#rock-btn');
const paper_btn = document.querySelector('#paper-btn');
const scissors_btn = document.querySelector('#scissors-btn');

const result_container = document.querySelector('#result-container');

const rules = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    var options = ["rock", "paper", "scissors"];
    return options[index];
}

function getPlayerChoice(id) {
    var playerChoice = "";
    switch(id) {
        case "rock-btn": 
            playerChoice = "rock";
            break;
        case "paper-btn":
            playerChoice = "paper";
            break;
        case "scissors-btn":
            playerChoice = "scissors";
            break;
    }
    return playerChoice;
}

function judge(player, computer) {
    var winner = "The winner is ";
    if (player === computer) {
        winner = "none";
    } else if (rules[player] === computer) {
        winner += `player with ${player} against ${computer}.`;
        playerScore += 1;
    } else if (rules[computer] === player) {
        winner += `computer with ${computer} against ${player}.`;
        computerScore += 1;
    }
    
    
    if (playerScore >= 5) {
        winner += `. Player wins this game with ${playerScore} against ${computerScore}`;
        playerScore = 0, computerScore = 0;
    } else if (computerScore >= 5) {
        winner += `. Computer wins this game with ${computerScore} against ${playerScore}`;
        playerScore = 0, computerScore = 0;
    } else {
        winner += `. Points: Player: ${playerScore} - ${computerScore} :Computer`
    }
    
    result_container.innerHTML = winner;
}

rock_btn.addEventListener('click', function(e) {

    judge(getPlayerChoice(this.id), getComputerChoice());
});

paper_btn.addEventListener('click', function(e) {
    judge(getPlayerChoice(this.id), getComputerChoice());
});

scissors_btn.addEventListener('click', function(e) {
    judge(getPlayerChoice(this.id), getComputerChoice());
});
