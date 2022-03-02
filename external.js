computerPlay();

function computerPlay() {
    let enemyTurn = Math.floor(Math.random()*3);
    if (enemyTurn === 0) enemyTurn = "Rock";
    if (enemyTurn === 1) enemyTurn = "Paper";
    if (enemyTurn === 2) enemyTurn = "Scissors";
    return playerSelection();


function playerSelection() {
    let yourTurn = prompt("Your Turn:")
    yourTurn.toLowerCase();
    yourTurn = yourTurn.charAt(0).toUpperCase() + yourTurn.slice(1).toLowerCase();
    if (yourTurn === "Rock" || yourTurn === "Paper" || yourTurn === "Scissors") {  jury()
    } else {
        playerSelection();
    }




function jury() {
    switch (true) {
        case yourTurn === enemyTurn:
            alert("draw");
            computerPlay;
            break;
        case yourTurn === "Rock" && enemyTurn === "Paper":
            alert("You Lose! Paper beats Rock");
            break;
        case yourTurn === "Paper" && enemyTurn === "Scissors":
            alert("You Lose! Scissors beats Paper");
            break;
        case yourTurn === "Scissors" && enemyTurn === "Rock":
            alert("You Lose! Rock beats Scissors");
            break;
        case yourTurn === "Scissors" && enemyTurn === "Paper":
            alert("You Win! Scissors beats Paper");
            break;
        case yourTurn === "Paper" && enemyTurn === "Rock":
            alert("You Win! Paper beats Rock");
            break;
        case yourTurn === "Rock" && enemyTurn === "Scissors":
            alert("You Win! Rock beats Scissors");
            break;

}}}};


