const rock_btn = document.getElementById("rock_btn");
const paper_btn = document.getElementById("paper_btn");
const scissors_btn = document.getElementById("scissors_btn");
const scoreHumain = document.getElementById("humain");
const scoreRobot = document.getElementById("robot");
const scoreResult = document.getElementById("result");
/*
let player;
let computer;
let roundWinner;

rock_btn.addEventListener("click", () =>{
    player = rock_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `Score Humain: ${player}`;
    scoreRobot.textContent = `Score Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})
paper_btn.addEventListener("click", () =>{
    player = paper_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `Score Humain: ${player}`;
    scoreRobot.textContent = `Score Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})
scissors_btn.addEventListener("click", () =>{
    player = scissors_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `Score Humain: ${player}`;
    scoreRobot.textContent = `Score Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})
*/
/*
function randomNumber(max) {
    return Math.floor(Math.random() * max);
};
*/
/*
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
        return 'ROCK';   
    case 1:
        return 'PAPER';
    case 2:
        return 'SCISSORS';
    }
}
*/

/*
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
        computer = 'ROCK';
        break;
    case 1:
        computer = 'PAPER';
        break;
    case 2:
        computer = 'SCISSORS';
        break;
    }
}

function checkWinner() {
    if (player == computer) {
        return 'Match Nul'
    } else if (computer == 'ROCK') {
        return (player == 'PAPER') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    } else if (computer == 'PAPER') {
        return (player == 'SCISSORS') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    } else if (computer == 'SCISSORS') {
        return (player == 'ROCK') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    }
}
*/
/*
let playerSelection = rock_btn || paper_btn || scissors_btn;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    playerScore = scoreHumain.innerText;
    computerScore = scoreRobot.innerText;
    if (playerSelection === computerSelection) {
        roundWinner = "match nul";
    }  if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    
}

playRound(playerSelection, computerSelection);
*/

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    }

    if (playerScore > computerScore) {
    console.log("You win the game!");
    } else if (computerScore > playerScore) {
    console.log("You lose the game!");
    } else {
    console.log("It's a tie game!");
    }
}
game();
*/
// UI DESIGN VERSION
let humanScoreEl = document.getElementById("human_score");
let robotScoreEl = document.getElementById("robot_score");
let player;
let computer;
let roundWinner;

rock_btn.addEventListener("click", () =>{
    player = rock_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `CHOIX Humain: ${player}`;
    scoreRobot.textContent = `CHOIX Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})
paper_btn.addEventListener("click", () =>{
    player = paper_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `CHOIX Humain: ${player}`;
    scoreRobot.textContent = `CHOIX Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})
scissors_btn.addEventListener("click", () =>{
    player = scissors_btn.textContent;
    getComputerChoice();
    scoreHumain.textContent = `CHOIX Humain: ${player}`;
    scoreRobot.textContent = `CHOIX Robot: ${computer}`;
    scoreResult.textContent = checkWinner();
})


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
        computer = '👊';
        break;
    case 1:
        computer = '🖐';
        break;
    case 2:
        computer = '🖖';
        break;
    }
}
/*
function checkWinner() {
    if (player == computer) {
        return 'Match Nul'
    } else if (computer == '👊') {
        return (player == '🖐') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    } else if (computer == '🖐') {
        return (player == '🖖') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    } else if (computer == '🖖') {
        return (player == '👊') ? `Bravo tu as gagné` : `Dommage tu as perdu`
    }
}
*/
let humanScore = 0;
let robotScore = 0;

function checkWinner() {
    
    if (player == computer) {
        return `Match Nul`
    }
    if ((computer == '👊' && player == '🖐') ||
    (computer == '🖐' && player == '🖖') ||
    (computer == '🖖' && player == '👊')){
        humanScore++;
        humanScoreEl.innerHTML = humanScore;
        return `Bravo tu gagnes!`
    }
    if ((player == '👊' && computer == '🖐') ||
    (player == '🖐' && computer == '🖖')     ||
    (player == '🖖' && computer == '👊')){
        robotScore++;
        robotScoreEl.innerHTML = robotScore;
        return `Dommage!`
    }
    return updateScore();
}

function updateScore() {
    if (humanScore == 5 || robotScore == 5) {
        return `C'est fini`
    }
}