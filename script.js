var rules = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

function getPlayerChoice() {
    choice = prompt("Please enter your choice: ");
    choice = choice.toLowerCase()
    return choice;
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
