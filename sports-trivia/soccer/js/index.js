$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"What is the biggest win in soccer?",qNum:1},{q:"What colour was Real Madrid's 2014-15 season away kit?",qNum:2},{q:"What year did Manchester United sign Robin Van Persie?",qNum:3},{q:"Which number does Neymar wear for PSG?",qNum:4},{q:"Which club loaned David Beckham twice?",qNum:5},{q:"How many clubs did Zlatan Ibrahimovic play for?",qNum:6},{q:"Which club did Michael Owen play for?",qNum:7},{q:"How many goals did Gareth Bale score for Southampton?",qNum:8},{q:"Who won the 2002 Fifa World Cup?",qNum:9},{q:"How long did Neymar play for Santos?",qNum:10},{q:"Which club has Messi played for besides Barcelona?",qNum:11},{q:"Which club has won the most Champions League trophies?",qNum:12},{q:"Who won the 2012 Ballon d'or?",qNum:13},{q:"How many Champions League trophies have Manchester United won?",qNum:14},{q:"Who is the most expensive transfer of all time?",qNum:15},{q:"Who hosted the 1962 World Cup?",qNum:16},{q:"Who won FIFA World Player of the year in 2006?",qNum:17},{q:"Who came in third place in the 1998 World Cup?",qNum:18},{q:"How far away from the goal is a penalty kick?",qNum:19},{q:"Who won the 1950 World Cup?",qNum:20},{q:"Which country has won the most World Cups?",qNum:21},{q:"Which team did Pele play for in America?",qNum:22},{q:"How many World Cups did Maradona win?",qNum:23},{q:"How many trophies has Dani Alves won?",qNum:24},{q:"How many teams has Christiano Ronaldo played for?",qNum:25},{q:"Who has won the most Ballon d'ors?",qNum:26},{q:"How many Golden Boots has Christiano Ronaldo won?",qNum:27},{q:"How many clubs have won the Champions League trebel?",qNum:28},{q:"How many Champions League trophies have Real Madrid won?",qNum:29},{q:"Which club was the most recent winner of the Champions League trebel?",qNum:30},{q:"In which World Cup final did Zinedine Zidane headbutt Marco Materazzi?",qNum:31},{q:"Which famous soccer player has a move named after him?",qNum:32},{q:"Which player has won the most major trophies?",qNum:33},{q:"How many Champions League trebels have Real Madrid won?",qNum:34},{q:"Which player famously scored a World Cup final goal with his hand dubbed the 'hand of God'?",qNum:35},{q:"Which of the following countries qualified for UEFA Euro 2012?",qNum:36},{q:"How far have America gone in the World Cup?",qNum:37},{q:"Who was named Chelsea manager in June 2013?",qNum:38},{q:"Where is Ronaldinho from?",qNum:39},{q:"Which soccer player has a history of biting other players?",qNum:40},{q:"Which famous goalkeeper suffered a horrific head injury and wears head gear?",qNum:41},{q:"How long was Manchester City's title drought before their dramatic 2012 title victory?",qNum:42},{q:"Which team has been waiting the longest to regain the Premier League title?",qNum:43},{q:"Who has been named Chelsea's Player of the Year three different times?",qNum:44},{q:"Who was captain of the 2014 Real Madrid squad?",qNum:45},{q:"Where did Gareth Bale transfer from to joint Real Madrid in 2013?",qNum:46},{q:"Which Real Madrid Manager served for 604 matches?",qNum:47},{q:"What number did Christiano Ronaldo first wear at Real Madrid?",qNum:48},{q:"What years did Ronaldinho play with Barcelona?",qNum:49},{q:"Which team set the record for most points in a Premier League season during the 2004-2005 season?",qNum:50}];

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
			$("#firstButton").html("57-0");
			$("#secondButton").html("37-0");
			$("#thirdButton").html("32-0");
			$("#fourthButton").html("30-1");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==2) {
			$("#firstButton").html("Red");
			$("#secondButton").html("Blue");
			$("#thirdButton").html("Black");
			$("#fourthButton").html("Pink");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==3) {
			$("#firstButton").html("2009");
			$("#secondButton").html("2010");
			$("#thirdButton").html("2011");
			$("#fourthButton").html("2012");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==4) {
			$("#firstButton").html("7");
			$("#secondButton").html("9");
			$("#thirdButton").html("10");
			$("#fourthButton").html("11");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==5) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Real Madrid");
			$("#thirdButton").html("LA Galaxy");
			$("#fourthButton").html("AC Milan");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==6) {
			$("#firstButton").html("1");
			$("#secondButton").html("4");
			$("#thirdButton").html("6");
			$("#fourthButton").html("10");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==7) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Liverpool");
			$("#thirdButton").html("Barcelona");
			$("#fourthButton").html("Real Madrid");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==8) {
			$("#firstButton").html("None");
			$("#secondButton").html("5");
			$("#thirdButton").html("8");
			$("#fourthButton").html("10");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==9) {
			$("#firstButton").html("Brazil");
			$("#secondButton").html("Germany");
			$("#thirdButton").html("Italy");
			$("#fourthButton").html("England");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==10) {
			$("#firstButton").html("2 years");
			$("#secondButton").html("5 years");
			$("#thirdButton").html("10 years");
			$("#fourthButton").html("14 years");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==11) {
			$("#firstButton").html("Real Madrid");
			$("#secondButton").html("AC Milan");
			$("#thirdButton").html("Monaco");
			$("#fourthButton").html("No Other Team");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==12) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("AC Milan");
			$("#thirdButton").html("Barcelona");
			$("#fourthButton").html("Real Madrid");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==13) {
			$("#firstButton").html("Ronaldo");
			$("#secondButton").html("Kaka");
			$("#thirdButton").html("Messi");
			$("#fourthButton").html("Iniesta");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==14) {
			$("#firstButton").html("0");
			$("#secondButton").html("2");
			$("#thirdButton").html("4");
			$("#fourthButton").html("6");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==15) {
			$("#firstButton").html("Paul Pogba");
			$("#secondButton").html("Messi");
			$("#thirdButton").html("Neymar");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==16) {
			$("#firstButton").html("Mexico");
			$("#secondButton").html("Chile");
			$("#thirdButton").html("Argentina");
			$("#fourthButton").html("England");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==17) {
			$("#firstButton").html("Fabio Cannavaro");
			$("#secondButton").html("Luis Figo");
			$("#thirdButton").html("Pavel Nedved");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==18) {
			$("#firstButton").html("Bulgaria");
			$("#secondButton").html("Turkey");
			$("#thirdButton").html("Croatia");
			$("#fourthButton").html("Portugal");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==19) {
			$("#firstButton").html("6 yards");
			$("#secondButton").html("12 yards");
			$("#thirdButton").html("15 yards");
			$("#fourthButton").html("18 yards");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==20) {
			$("#firstButton").html("Brazil");
			$("#secondButton").html("Uruguay");
			$("#thirdButton").html("Czechoslovakia");
			$("#fourthButton").html("West Germany");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==21) {
			$("#firstButton").html("England");
			$("#secondButton").html("Germany");
			$("#thirdButton").html("Brazil");
			$("#fourthButton").html("Italy");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==22) {
			$("#firstButton").html("New York Cosmos");
			$("#secondButton").html("LA Galaxy");
			$("#thirdButton").html("New York City FC");
			$("#fourthButton").html("Seattle Sounders");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==23) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==24) {
			$("#firstButton").html("34");
			$("#secondButton").html("35");
			$("#thirdButton").html("36");
			$("#fourthButton").html("37");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==25) {
			$("#firstButton").html("1");
			$("#secondButton").html("2");
			$("#thirdButton").html("3");
			$("#fourthButton").html("4");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==26) {
			$("#firstButton").html("Lionel Messi");
			$("#secondButton").html("Christiano Ronaldo");
			$("#thirdButton").html("Michel Platini");
			$("#fourthButton").html("Johan Cruyff");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==27) {
			$("#firstButton").html("2");
			$("#secondButton").html("3");
			$("#thirdButton").html("4");
			$("#fourthButton").html("5");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==28) {
			$("#firstButton").html("3");
			$("#secondButton").html("5");
			$("#thirdButton").html("7");
			$("#fourthButton").html("9");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==29) {
			$("#firstButton").html("8");
			$("#secondButton").html("10");
			$("#thirdButton").html("12");
			$("#fourthButton").html("14");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==30) {
			$("#firstButton").html("Real Madrid");
			$("#secondButton").html("Barcelona");
			$("#thirdButton").html("Inter Milan");
			$("#fourthButton").html("Bayern Munich");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==31) {
			$("#firstButton").html("1998");
			$("#secondButton").html("2002");
			$("#thirdButton").html("2006");
			$("#fourthButton").html("2010");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==32) {
			$("#firstButton").html("Lionel Messi");
			$("#secondButton").html("Steven Gerrard");
			$("#thirdButton").html("Ronaldinho");
			$("#fourthButton").html("Johan Cruyff");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==33) {
			$("#firstButton").html("Ibrahimovic");
			$("#secondButton").html("Dani Alves");
			$("#thirdButton").html("Ryan Giggs");
			$("#fourthButton").html("Maxwell");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==34) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==35) {
			$("#firstButton").html("Zinedine Zidane");
			$("#secondButton").html("Diego Maradona");
			$("#thirdButton").html("Pelé");
			$("#fourthButton").html("Ronaldo");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==36) {
			$("#firstButton").html("Netherlands");
			$("#secondButton").html("Lithuania");
			$("#thirdButton").html("Iceland");
			$("#fourthButton").html("Switzerland");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==37) {
			$("#firstButton").html("Round of 32");
			$("#secondButton").html("Round of 16");
			$("#thirdButton").html("Quarter-Finals");
			$("#fourthButton").html("Semi-Finals");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==38) {
			$("#firstButton").html("Jose Mourinho");
			$("#secondButton").html("Andre Schurrle");
			$("#thirdButton").html("Bruce Buck");
			$("#fourthButton").html("Antonio Conte");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==39) {
			$("#firstButton").html("Argentina");
			$("#secondButton").html("Paraguay");
			$("#thirdButton").html("Chile");
			$("#fourthButton").html("Brazil");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==40) {
			$("#firstButton").html("Edison Cavani");
			$("#secondButton").html("Luis Suarez");
			$("#thirdButton").html("Neymar");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==41) {
			$("#firstButton").html("Gianluigi Buffon");
			$("#secondButton").html("Iker Casillas");
			$("#thirdButton").html("Peter Čhech");
			$("#fourthButton").html("Manuel Neuer");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==42) {
			$("#firstButton").html("20 Years");
			$("#secondButton").html("28 Years");
			$("#thirdButton").html("34 Years");
			$("#fourthButton").html("43 Years");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==43) {
			$("#firstButton").html("Sheffield United");
			$("#secondButton").html("Preston");
			$("#thirdButton").html("Tottenham");
			$("#fourthButton").html("West Brom");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==44) {
			$("#firstButton").html("Frank Lampard");
			$("#secondButton").html("John Terry");
			$("#thirdButton").html("Didier Drogba");
			$("#fourthButton").html("Juan Mata");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==45) {
			$("#firstButton").html("Xabi Alonso");
			$("#secondButton").html("Sergio Ramos");
			$("#thirdButton").html("Sami Khedira");
			$("#fourthButton").html("Iker Casillas");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==46) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Tottenham");
			$("#thirdButton").html("Lyon");
			$("#fourthButton").html("Barcelona");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==47) {
			$("#firstButton").html("Jose Villalonga");
			$("#secondButton").html("Manuel Fleitas");
			$("#thirdButton").html("Miguel Munoz");
			$("#fourthButton").html("Leo Beenhakker");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==48) {
			$("#firstButton").html("7");
			$("#secondButton").html("9");
			$("#thirdButton").html("10");
			$("#fourthButton").html("11");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==49) {
			$("#firstButton").html("2003-2008");
			$("#secondButton").html("2001-2003");
			$("#thirdButton").html("2008-2010");
			$("#fourthButton").html("2010-2012");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==50) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Liverpool");
			$("#thirdButton").html("Chelsea");
			$("#fourthButton").html("Everton");
			$("#thirdButton").addClass("answer");
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
		}
		else {
			$(this).addClass("incorrect");
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
