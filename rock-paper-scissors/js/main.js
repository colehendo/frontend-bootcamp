const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

var botScore = 0;
var playerScore = 0;
var playersWeapon = ROCK;

function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  var botsWeapon = getRandomWeapon();

  displayCompleteMessage(playersWeapon, botsWeapon, "You lose. :(");
}

function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  var botsWeapon = getRandomWeapon();

  displayCompleteMessage(playersWeapon, botsWeapon, "You win! :)");
}

function displayCompleteMessage(playersWeapon, botsWeapon, result) {
  message = `You played <span class=underline>${playersWeapon}</span>. The bot played <span class=bold>${botsWeapon}</span>.<br><br>${result}`;
  document.getElementById("status").innerHTML = message;
}

function getRandomWeapon() {
  var randomNumber = Math.random();
  var botsWeapon = ROCK;
  if (randomNumber < 0.33) {
    botsWeapon = SCISSORS;
  } else if (randomNumber < 0.6666) {
    botsWeapon = PAPER;
  }
  return botsWeapon;
}

function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage(playersWeapon, botsWeapon, "You tied. :|");
  } else if (
    (botsWeapon == SCISSORS && playersWeapon == PAPER) ||
    (botsWeapon == PAPER && playersWeapon == ROCK) ||
    (botsWeapon == ROCK && playersWeapon == SCISSORS)
  ) {
    increaseBotScore();
  } else {
    increasePlayerScore();
  }
}

document.getElementById(ROCK).onclick = playerThrowsRock;
function playerThrowsRock() {
  playersWeapon = ROCK;
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, ROCK);
}

document.getElementById(SCISSORS).onclick = playerThrowsScissors;
function playerThrowsScissors() {
  playersWeapon = SCISSORS;
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, SCISSORS);
}

document.getElementById(PAPER).onclick = playerThrowsPaper;
function playerThrowsPaper() {
  playersWeapon = PAPER;
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, PAPER);
}
