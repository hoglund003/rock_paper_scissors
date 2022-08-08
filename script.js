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
    var winner = "";
    if (player === computer) {
        winner = "none";
    } else if (rules[player] === computer) {
        winner = `player with ${player} against ${computer}`;
    } else if (rules[computer] === player) {
        winner = `computer with ${computer} against ${player}`;
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
