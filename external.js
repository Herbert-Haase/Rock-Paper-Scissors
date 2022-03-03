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
 
  const playerSelection = "PAPER";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));


