var botScore=0;
	playerScore=0;
	playersWeapon="rock";

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	playersWeapon = "rock";
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	playersWeapon = "scissors";
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}

document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	playersWeapon = "paper";
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("You played <span class=underline>" + playersWeapon + "</span>. The bot played <span class=bold>" + botsWeapon + '</span>.<br><br>You tied. :|');
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	var botsWeapon = getRandomWeapon();
	displayCompleteMessage("You played <span class=underline>" + playersWeapon + "</span>. The bot played <span class=bold>" + botsWeapon + '</span>.<br><br>You lose. :(');
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	var botsWeapon = getRandomWeapon();
	displayCompleteMessage("You played <span class=underline>" + playersWeapon + "</span>. The bot played <span class=bold>" + botsWeapon + '</span>.<br><br>You win! :)');
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}


 


