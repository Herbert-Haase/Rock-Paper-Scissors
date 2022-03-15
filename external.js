function computerPlay() {
    let enemyTurn = Math.floor(Math.random()*3);
    if (enemyTurn === 0) enemyTurn = "rock";
    if (enemyTurn === 1) enemyTurn = "paper";
    if (enemyTurn === 2) enemyTurn = "scissors";
    return enemyTurn;
}

function playRound(playerSelection) {
    const computerSelection = computerPlay()
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


    function evaluateRound() {
        let demoId = document.querySelector('#demo');
        let thisRound = demoId.firstElementChild.textContent;
            if (thisRound.charAt(4) === "W") { 
                winRatio++;
            } else if (thisRound.charAt(4) === "L") {
                winRatio--;
            };
    }
    function decideGame() {
        if(winRatio < 0) {
            return "You lost";
        } else {
            return "You won";
        }
    }
    

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
let winRatio = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let demoDiv = document.getElementById("demo");
        if(demoDiv.firstElementChild) demoDiv.removeChild(demoDiv.firstElementChild);
        let text = document.createElement("p");
        text.textContent = playRound(button.textContent);
        demoDiv.appendChild(text)
        evaluateRound();
    });
});



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let round = document.querySelector('strong');  
        let text = document.querySelector('.five');
        let roundAmount = parseInt(round.textContent.charAt(0)); 
        ++roundAmount;
        if(roundAmount > 5) roundAmount = 1;
        round.textContent = `${roundAmount}/5`
        
        if(roundAmount !== 5) {
            text.textContent = "";
        }
        if(roundAmount === 5) {
            text.textContent = decideGame();
            text.style.cssText = 'color: red';

            winRatio = 0;
        };    
    });
});






