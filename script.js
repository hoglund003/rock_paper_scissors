var rules = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

function getPlayerChoice() {
    var choice = prompt("Please enter your choice: ");
    choice = choice.toLowerCase();
    return choice;
}

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    var options = ["rock", "paper", "scissors"];
    return options[index];
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

    console.log(`The winner is ${winner}`);
}

while (true) {
    judge(getPlayerChoice(), getComputerChoice());
}
