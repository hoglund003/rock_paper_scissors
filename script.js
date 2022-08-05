
function getComputerChoice() {
    var n = Math.floor(Math.random() * 3);
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

