function computerPlay() {
    let enemyTurn = Math.floor(Math.random()*3);
    if (enemyTurn === 0) enemyTurn = "rock";
    if (enemyTurn === 1) enemyTurn = "paper";
    if (enemyTurn === 2) enemyTurn = "scissors";
    return enemyTurn;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (true) {
        case playerSelection === computerSelection:
            return("draw");
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            return("You Lose! Paper beats Rock");
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            return("You Lose! Scissors beats Paper");
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            return("You Lose! Rock beats Scissors");
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            return("You Win! Scissors beats Paper");
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            return("You Win! Paper beats Rock");
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            return("You Win! Rock beats Scissors");
            break;
    };
}



function playGame() {
    let winRatio = 0;

    function evaluateRound() {
        let playerSelection = prompt("Your Turn:");
            let computerSelection = computerPlay();
            let thisRound = playRound(playerSelection, computerSelection);
            if (thisRound[4] === "W") { 
                winRatio++;
            } else if (thisRound[4] === "L") {
                winRatio--;
            };
            console.log(thisRound);
    }
    let result;
    for(let i = 0; i < 5; i++) {
    evaluateRound();
    }
    if (winRatio === 0) {
        console.log("Ended on a draw. tie breaker round:");  
        evaluateRound();
    };
    winRatio > 0 ? result = "You won the 5 round game" : result = "You lost the 5 round game";
    return result;
}

  console.log(game());


