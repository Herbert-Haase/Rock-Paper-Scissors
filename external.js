function computerPlay() {
    let turn = Math.floor(Math.random()*3);
    if (turn === 0) return "Rock";
    if (turn === 1) return "Paper";
    if (turn === 2) return "Scissors";
}