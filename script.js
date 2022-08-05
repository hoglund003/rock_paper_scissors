
function getComputerChoice() {
    var n = Math.ceil(Math.random() * 3);
    return n
}

function getPlayerChoice() {
    choice = prompt("Please enter your choice").toLowerCase();
    if (choice === "paper") {
        choice = 1;
    } else if (choice === "rock") {
        choice = 2;
    } else if (choice === "scissors") {
        choice = 3;
    }
    return choice;
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice < computerChoice) {
        // player wins
        console.log("Player wins");
    } else if (playerChoice > computerChoice) {
        // computer wins
        console.log("Computer wins");
    } else if (playerChoice === computerChoice) {
        // it's a draw
        console.log("It's a draw");
    }
}