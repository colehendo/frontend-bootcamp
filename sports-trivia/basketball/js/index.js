$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"Who was the only NBA player to ever score 100 points in a single game?",qNum:1},{q:"Which player scored 81 points against the Toronto raptors?",qNum:2},{q:"Which NBA team won the 1970-71 NBA Championship?",qNum:3},{q:"How far is the NBA 3 point line from the basket?",qNum:4},{q:"How far is the free throw line from the basket?",qNum:5},{q:"What is the length of a full sized NBA court?",qNum:6},{q:"Who invented basketball?",qNum:7},{q:"Which NBA team has won the most NBA championships?",qNum:8},{q:"Who was the only women to ever get drafted into the NBA?",qNum:9},{q:"Which NBA player holds the most points scored in an entire career?",qNum:10},{q:"Which NBA head coach holds the record for most wins?",qNum:11},{q:"Which NBA team has a mascot wearing number 95 on it?",qNum:12},{q:"Who won NBA coach of the year in 2000-01?",qNum:13},{q:"Who won NBA coach of the year in 1970-71?",qNum:14},{q:"Who won NBA rookie of the year in 1985-86?",qNum:15},{q:"Who holds the record for the most three-pointers in a game with 13?",qNum:16},{q:"Who holds the record for most rebounds in a single game at 55?",qNum:17},{q:"Which team holds the record for most 3-point field goals ever in a game at 25?",qNum:18},{q:"Who was the youngest player to ever be named NBA rookie of the year?",qNum:19},{q:"What was Kareem Abdul-Jabbar's name before he changed it?",qNum:20},{q:"What year was the NBA founded?",qNum:21},{q:"Who is the highest paid NBA player currently?",qNum:22},{q:"How many teams are in the NBA?",qNum:23},{q:"How many logos have the Golden State Warriors had throughout history?",qNum:24},{q:"Which player technically broke the NBA color barrier in the 1947-1948 season?",qNum:25},{q:"In 1994 and 1995, which team did Hakeem Olajuwon win back-to-back titles with?",qNum:26},{q:"Before they were the 'Memphis Grizzlies,' what were they called?",qNum:27},{q:"The NBA Finals championship trophy is called the ________ Championship Trophy.",qNum:28},{q:"Whose silhouette serves as the modern day logo of the NBA?",qNum:29},{q:"Which player has the most championship rings?",qNum:30},{q:"Who was the only college player selected to the 1992 Olympics 'Dream Team'?",qNum:31},{q:"Which number did Michael Jordan wear other than 23?",qNum:32},{q:"What team did Michael Jordan play for after the Bulls?",qNum:33},{q:"Which NBA player is nicknamed 'The Mailman'?",qNum:34},{q:"How many teams did Charles Barkley play for in his career?",qNum:35},{q:"Who was the only player voted MVP in both the ABA and the NBA?",qNum:36},{q:"How many championships have the New York Knicks won?",qNum:37},{q:"Which NBA player holds the career record for total assists and steals?",qNum:38},{q:"How many times has Michael Jordan won the Slam Dunk contest?",qNum:39},{q:"What famous Comedy did Kareem Abdul-Jabbar star in?",qNum:40},{q:"Michael Jordan was drafted third overall in the 1984 NBA draft. Who went second?",qNum:41},{q:"How many points did Kobe Bryant score in his final game?",qNum:42},{q:"What number did Kobe Bryant wear before 24?",qNum:43},{q:"Which team did Shaq spend his final year in the NBA playing for?",qNum:44},{q:"Which NBA player averaged over 50 points per game for an entire season?",qNum:45},{q:"Which former NBA player is Cole Henderson related to?",qNum:46},{q:"Which player has won the NBA MVP a record six times?",qNum:47},{q:"Who is the only player to win the Slam Dunk contest three times?",qNum:48},{q:"Which one of the following is the first North American sports figure to win a championship as a player, coach, and executive?",qNum:49},{q:"Kobe Bryant's nickname was 'Black Mamba'. Which NBA legend was nicknamed 'White Mamba'?",qNum:50}];

	//Random function. Pick random question from array and therefore pick corresponding answer array.
	function randomArray(){
		var rand = Math.floor(Math.random() * questions.length);
		var randQuestion = questions[rand];
		var selectedQuestion = randQuestion.q;
		console.log(selectedQuestion);
		console.log(questions);

		$("h1").html(selectedQuestion);
		$("h2").html("Question: "+count);
		return rand;
	}

	function answer() {
		var rand = randomArray();
		var randQuestion = questions[rand];
		var questionNumber = randQuestion.qNum;
		if (questionNumber==1) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Wilt Chamberlain");
			$("#thirdButton").html("Larry Bird");
			$("#fourthButton").html("LeBron James");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==2) {
			$("#firstButton").html("Kobe Bryant");
			$("#secondButton").html("Dwayne Wade");
			$("#thirdButton").html("Steph Curry");
			$("#fourthButton").html("Brian Scalabrine");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==3) {
			$("#firstButton").html("Lakers");
			$("#secondButton").html("Bucks");
			$("#thirdButton").html("Rockets");
			$("#fourthButton").html("Magic");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==4) {
			$("#firstButton").html("23 feet 9 inches");
			$("#secondButton").html("23 feet 4 inches");
			$("#thirdButton").html("22 feet 6 inches");
			$("#fourthButton").html("20 feet 8 inches");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==5) {
			$("#firstButton").html("20 feet");
			$("#secondButton").html("18 feet");
			$("#thirdButton").html("16 feet");
			$("#fourthButton").html("15 feet");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==6) {
			$("#firstButton").html("95 feet");
			$("#secondButton").html("94 feet");
			$("#thirdButton").html("92 feet");
			$("#fourthButton").html("90 feet");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==7) {
			$("#firstButton").html("David Stern");
			$("#secondButton").html("Tony Henderson");
			$("#thirdButton").html("John Williams");
			$("#fourthButton").html("James Naismith");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==8) {
			$("#firstButton").html("Celtics");
			$("#secondButton").html("Lakers");
			$("#thirdButton").html("Bucks");
			$("#fourthButton").html("Pistons");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==9) {
			$("#firstButton").html("Lisa Leslie");
			$("#secondButton").html("Tina Thompson");
			$("#thirdButton").html("Lusia Harris");
			$("#fourthButton").html("Sheryl Swoopes");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==10) {
			$("#firstButton").html("Reggie Miller");
			$("#secondButton").html("Michael Jordan");
			$("#thirdButton").html("Kareem Abdul-Jabbar");
			$("#fourthButton").html("Patrick Ewing");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==11) {
			$("#firstButton").html("Pat Riley");
			$("#secondButton").html("Phil Jackson");
			$("#thirdButton").html("Don Nelson");
			$("#fourthButton").html("Lenny Wilkens");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==12) {
			$("#firstButton").html("Magic");
			$("#secondButton").html("Raptors");
			$("#thirdButton").html("Cavaliers");
			$("#fourthButton").html("Mavericks");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==13) {
			$("#firstButton").html("Gregg Popovich");
			$("#secondButton").html("Rick Carlisle");
			$("#thirdButton").html("Larry Brown");
			$("#fourthButton").html("Lenny Wilkens");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==14) {
			$("#firstButton").html("Bill Sharman");
			$("#secondButton").html("Dick Motta");
			$("#thirdButton").html("Ray Scott");
			$("#fourthButton").html("Red Holzman");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==15) {
			$("#firstButton").html("Patrick Ewing");
			$("#secondButton").html("Oscar Robinson");
			$("#thirdButton").html("Mark Jackson");
			$("#fourthButton").html("Michael Jordan");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==16) {
			$("#firstButton").html("Ray Allen");
			$("#secondButton").html("Steph Curry");
			$("#thirdButton").html("Kobe Bryant");
			$("#fourthButton").html("John Havlicek");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==17) {
			$("#firstButton").html("Kareem Abdul-Jabbar");
			$("#secondButton").html("Wilt Chamberlain");
			$("#thirdButton").html("Bill Russell");
			$("#fourthButton").html("Anthony Davis");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==18) {
			$("#firstButton").html("Lakers");
			$("#secondButton").html("Cavaliers");
			$("#thirdButton").html("Celtics");
			$("#fourthButton").html("Warriors");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==19) {
			$("#firstButton").html("Derrick Rose");
			$("#secondButton").html("Bob Pettit");
			$("#thirdButton").html("Dave Cowens");
			$("#fourthButton").html("Steph Curry");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==20) {
			$("#firstButton").html("Cassius Clay");
			$("#secondButton").html("Wes Unseld");
			$("#thirdButton").html("Bob McAdoo");
			$("#fourthButton").html("Lew Alcindor");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==21) {
			$("#firstButton").html("1949");
			$("#secondButton").html("1946");
			$("#thirdButton").html("1936");
			$("#fourthButton").html("1928");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==22) {
			$("#firstButton").html("Steph Curry");
			$("#secondButton").html("Russell Westbrook");
			$("#thirdButton").html("LeBron James");
			$("#fourthButton").html("James Harden");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==23) {
			$("#firstButton").html("25");
			$("#secondButton").html("30");
			$("#thirdButton").html("35");
			$("#fourthButton").html("40");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==24) {
			$("#firstButton").html("2");
			$("#secondButton").html("5");
			$("#thirdButton").html("7");
			$("#fourthButton").html("12");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==25) {
			$("#firstButton").html("Earl Lloyd");
			$("#secondButton").html("George Mikan");
			$("#thirdButton").html("Nat Clifton");
			$("#fourthButton").html("Wataru Misaka");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==26) {
			$("#firstButton").html("Rockets");
			$("#secondButton").html("Cavaliers");
			$("#thirdButton").html("Magic");
			$("#fourthButton").html("Pistons");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==27) {
			$("#firstButton").html("Vancouver Grizzlies");
			$("#secondButton").html("Richmond Grizzlies");
			$("#thirdButton").html("Montreal Grizzlies");
			$("#fourthButton").html("Tampa Bay Grizzlies");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==28) {
			$("#firstButton").html("Bill Russell");
			$("#secondButton").html("Larry O'Brien");
			$("#thirdButton").html("NBA Finals");
			$("#fourthButton").html("Brian Scalabrine");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==29) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Bill Cousy");
			$("#thirdButton").html("Jerry West");
			$("#fourthButton").html("Pat Riley");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==30) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Robert Horry");
			$("#thirdButton").html("Sam Jones");
			$("#fourthButton").html("Bill Russell");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==31) {
			$("#firstButton").html("Shaq");
			$("#secondButton").html("Christian Laettner");
			$("#thirdButton").html("Chris Mullin");
			$("#fourthButton").html("Chris Webber");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==32) {
			$("#firstButton").html("0");
			$("#secondButton").html("8");
			$("#thirdButton").html("24");
			$("#fourthButton").html("45");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==33) {
			$("#firstButton").html("Celtics");
			$("#secondButton").html("Raptors");
			$("#thirdButton").html("Heat");
			$("#fourthButton").html("Wizards");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==34) {
			$("#firstButton").html("Dennis Rodman");
			$("#secondButton").html("Karl Malone");
			$("#thirdButton").html("Shaq");
			$("#fourthButton").html("Blake Griffin");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==35) {
			$("#firstButton").html("One");
			$("#secondButton").html("Two");
			$("#thirdButton").html("Three");
			$("#fourthButton").html("Four");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==36) {
			$("#firstButton").html("Moses Malone");
			$("#secondButton").html("Julius Erving");
			$("#thirdButton").html("Bill Russell");
			$("#fourthButton").html("Magic Johnson");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==37) {
			$("#firstButton").html("2");
			$("#secondButton").html("4");
			$("#thirdButton").html("6");
			$("#fourthButton").html("8");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==38) {
			$("#firstButton").html("John Stockton");
			$("#secondButton").html("Magic Johnson");
			$("#thirdButton").html("Jason Kidd");
			$("#fourthButton").html("Steve Nash");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==39) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==40) {
			$("#firstButton").html("Caddy Shack");
			$("#secondButton").html("Young Frankenstein");
			$("#thirdButton").html("Trading Places");
			$("#fourthButton").html("Airplane");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==41) {
			$("#firstButton").html("Akeem Olajuwon");
			$("#secondButton").html("Sam Bowie");
			$("#thirdButton").html("Sam Perkins");
			$("#fourthButton").html("Charles Barkley");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==42) {
			$("#firstButton").html("45");
			$("#secondButton").html("50");
			$("#thirdButton").html("55");
			$("#fourthButton").html("60");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==43) {
			$("#firstButton").html("8");
			$("#secondButton").html("23");
			$("#thirdButton").html("45");
			$("#fourthButton").html("99");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==44) {
			$("#firstButton").html("Cavaliers");
			$("#secondButton").html("Celtics");
			$("#thirdButton").html("Suns");
			$("#fourthButton").html("Heat");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==45) {
			$("#firstButton").html("Magic Johnson");
			$("#secondButton").html("Tim Duncan");
			$("#thirdButton").html("Wilt Chamberlain");
			$("#fourthButton").html("Michael Jordan");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==46) {
			$("#firstButton").html("Chris Dudley");
			$("#secondButton").html("Jason Williams");
			$("#thirdButton").html("John Stockton");
			$("#fourthButton").html("Brian Scalabrine");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==47) {
			$("#firstButton").html("Kareem Abdul-Jabbar");
			$("#secondButton").html("Michael Jordan");
			$("#thirdButton").html("LeBron James");
			$("#fourthButton").html("Tim Duncan");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==48) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Zach LaVine");
			$("#thirdButton").html("Jason Richardson");
			$("#fourthButton").html("Nate Robinson");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==49) {
			$("#firstButton").html("Pat Riley");
			$("#secondButton").html("Lenny Wilkins");
			$("#thirdButton").html("Phil Jackson");
			$("#fourthButton").html("Larry Bird");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==50) {
			$("#firstButton").html("Dirk Nowitzki");
			$("#secondButton").html("Chris Dudley");
			$("#thirdButton").html("Jason Kidd");
			$("#fourthButton").html("Brian Scalabrine");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else {
			return;
		}
	}

	$("#startTrivia").on("click",function(){
		randomArray();
		answer();
		$(this).addClass("hide");
		$("#buttons").removeClass("hide");
		$("h1").removeClass("hide");
		$("h2").removeClass("hide");
		count += 1;
	});

	$("#topButtons button").on("click",function(){
		if ($(this).hasClass("answer")) {
			$("#nextQuestion").addClass("done");
			$("#topButtons button").addClass("incorrect");
			$(this).removeClass("incorrect");
			$(this).addClass("correct");
			$("#topButtons button").prop('disabled', true);
		}
		else {
			$(this).addClass("incorrect");
			$(this).prop('disabled', true);
		}
	});

	$("#nextQuestion").on("click",function(){
		$('#topButtons button').removeClass('answer');
		randomArray();
		answer();
		$(this).removeClass("done");
		$("#correct").removeClass("done");
		$("#incorrect").removeClass("done");
		$('#topButtons button').removeClass('correct');
		$('#topButtons button').removeClass('incorrect');
		$('#topButtons button').prop('disabled', false);
		count += 1;
		if (count==21) {
			$("#nextQuestion").html("Finish Trivia");
		}
		else if (count==22) {
			$("h2").addClass("hide");
			$("h1").addClass("hide");
			$("p").removeClass("hide");
			$("#topButtons button").addClass("hide");
			$("#container").css("margin-top","10%");
		}
	});

});
