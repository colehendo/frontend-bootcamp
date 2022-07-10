$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"Who has the most wins as a head coach in the NFL?",qNum:1},{q:"Which NFL team features a helmet decal only on one side of the helmet?",qNum:2},{q:"Who is the last non-quarterback to win NFL MVP?",qNum:3},{q:"This current NFL quarterback, a 2010 Pro Bowler, never started a game at QB in college.",qNum:4},{q:"How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",qNum:5},{q:"Which of these teams was NOT an original NFL team that moved over to the AFC?",qNum:6},{q:"Who is the only player enshrined in Canton AND in the CFL Hall of Fame?",qNum:7},{q:"Which state has produced the most pro football Hall of Famers?",qNum:8},{q:"Who is the only Super Bowl MVP to have played on the losing team?",qNum:9},{q:"Who is the NFL's all-time leading rusher?",qNum:10},{q:"Which NFL team has not made the playoffs in this century?",qNum:11},{q:"Who holds the single-season record for touchdown receptions with 23?",qNum:12},{q:"In the 1985 draft, The 49ers traded picks with which franchise to select Jerry Rice with the 16th pick?",qNum:13},{q:"Who holds the record for the longest field goal in NFL history?",qNum:14},{q:"Which of these defensive players did not win a Super Bowl MVP?",qNum:15},{q:"How long was Scott Norwood's 'Wide Right' miss to end Super Bowl XXV?",qNum:16},{q:"The Seattle Seahawks pay which university a licensing fee to use the '12th Man' slogan?",qNum:17},{q:"Who currently has the highest career passer rating (Min. 1,500 attempts) at 106.0?",qNum:18},{q:"Who is the only member of both the Pro Football Hall of Fame, and the Professional Wrestling Hall of Fame?",qNum:19},{q:"As defensive coordinator of the 1985 Bears, Buddy Ryan is hailed as the architect of which defensive scheme?",qNum:20},{q:"As Super Bowl 49 MVP, Tom Brady received a Chevrolet truck. To which teammate did he give the keys?",qNum:21},{q:"What is Peyton Manning's playoff winning percentage?",qNum:22},{q:"Which Major League Baseball team selected both John Elway and Dan Marino in the 1979 amateur draft?",qNum:23},{q:"Which MLB team drafted Tom Brady in the 18th round?",qNum:24},{q:"Which quarterback was taken before Drew Brees in the 2001 draft?",qNum:25},{q:"Which quarterback has the longest active streak of consecutive starts at 178?",qNum:26},{q:"How many Super Bowl rings does Bill Belichick have?",qNum:27},{q:"Which team did Peyton Manning play for before the Denver Broncos?",qNum:28},{q:"Who holds the record for the most sacks in a season?",qNum:29},{q:"Who has the record for the most passing yards in a season?",qNum:30},{q:"Who has the record for most rushing yards in a season?",qNum:31},{q:"Who holds the record for all-time receiving yards?",qNum:32},{q:"Which quarterback has the most completions ever in the NFL?",qNum:33},{q:"Which quarterback holds the single-season touchdown record?",qNum:34},{q:"Which NFL player has the most interceptions of all-time?",qNum:35},{q:"Which NFL player holds the record for most tackles of all-time?",qNum:36},{q:"Which non-quarterback NFL player has the most rings?",qNum:37},{q:"Which current NFL stadium is the oldest?",qNum:38},{q:"In which year was the first Super Bowl played?",qNum:39},{q:"Who won the first Super Bowl?",qNum:40},{q:"Which famous NFL head coach has a popular football videogame named after him?",qNum:41},{q:"Which Super Bowl half-time performer famously had a wardrobe malfunction?",qNum:42},{q:"What were the New England Patriots almost named?",qNum:43},{q:"How many people are on the Green Bay Packers' season ticket waiting list?",qNum:44},{q:"Which NFL team is publicly owned?",qNum:45},{q:"How many footballs does Wilson produce per day?",qNum:46},{q:"Which NFL player recorded two safties in one game?",qNum:47},{q:"How many people watched the first televised football game?",qNum:48},{q:"Which NFL team has the longest Super Bowl victory drought?",qNum:49},{q:"Who is the greatest quarterback of all time?",qNum:50}];

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
			$("#firstButton").html("Curly Lambeau");
			$("#secondButton").html("George Halas");
			$("#thirdButton").html("Tom Landry");
			$("#fourthButton").html("Don Shula");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==2) {
			$("#firstButton").html("Houston Texans");
			$("#secondButton").html("Jacksonville Jaguars");
			$("#thirdButton").html("Pittsburgh Steelers");
			$("#fourthButton").html("Tennessee Titans");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==3) {
			$("#firstButton").html("Adrian Peterson");
			$("#secondButton").html("Shaun Alexander");
			$("#thirdButton").html("Ray Lewis");
			$("#fourthButton").html("LaDainian Tomlinson");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==4) {
			$("#firstButton").html("Matt Schaub");
			$("#secondButton").html("Matt Cassel");
			$("#thirdButton").html("Matt Moore");
			$("#fourthButton").html("Matt Flynn");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==5) {
			$("#firstButton").html("2");
			$("#secondButton").html("3");
			$("#thirdButton").html("4");
			$("#fourthButton").html("5");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==6) {
			$("#firstButton").html("Browns");
			$("#secondButton").html("Colts");
			$("#thirdButton").html("Steelers");
			$("#fourthButton").html("Raiders");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==7) {
			$("#firstButton").html("Fred Biletnikoff");
			$("#secondButton").html("Warren Moon");
			$("#thirdButton").html("Joe Theismann");
			$("#fourthButton").html("Doug Flutie");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==8) {
			$("#firstButton").html("California");
			$("#secondButton").html("Ohio");
			$("#thirdButton").html("Texas");
			$("#fourthButton").html("Pennsylvania");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==9) {
			$("#firstButton").html("Larry Fitzgerald");
			$("#secondButton").html("Chuck Howley");
			$("#thirdButton").html("Dan Marino");
			$("#fourthButton").html("Steve McNair");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==10) {
			$("#firstButton").html("Emmitt Smith");
			$("#secondButton").html("Walter Payton");
			$("#thirdButton").html("Barry Sanders");
			$("#fourthButton").html("Eric Dickerson");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==11) {
			$("#firstButton").html("Buffalo Bills");
			$("#secondButton").html("Cleveland Browns");
			$("#thirdButton").html("Chicago Bears");
			$("#fourthButton").html("LA Rams");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==12) {
			$("#firstButton").html("Jerry Rice");
			$("#secondButton").html("Calvin Johnson");
			$("#thirdButton").html("Terrell Owens");
			$("#fourthButton").html("Randy Moss");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==13) {
			$("#firstButton").html("Green Bay Packers");
			$("#secondButton").html("Indianapolis Colts");
			$("#thirdButton").html("New England Patriots");
			$("#fourthButton").html("Seattle Seahwaks");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==14) {
			$("#firstButton").html("Tom Dempsey");
			$("#secondButton").html("Matt Prater");
			$("#thirdButton").html("Jason Elam");
			$("#fourthButton").html("Sebastian Janikowski");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==15) {
			$("#firstButton").html("Richard Dent");
			$("#secondButton").html("Lawrence Taylor");
			$("#thirdButton").html("Harvey Martin");
			$("#fourthButton").html("Ray Lewis");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==16) {
			$("#firstButton").html("43 yards");
			$("#secondButton").html("45 yards");
			$("#thirdButton").html("47 yards");
			$("#fourthButton").html("49 yards");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==17) {
			$("#firstButton").html("Texas A&M");
			$("#secondButton").html("Auburn");
			$("#thirdButton").html("Clemson");
			$("#fourthButton").html("Wisconsin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==18) {
			$("#firstButton").html("Peyton Manning");
			$("#secondButton").html("Tom Brady");
			$("#thirdButton").html("Drew Brees");
			$("#fourthButton").html("Aaron Rodgers");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==19) {
			$("#firstButton").html("Alex Karras");
			$("#secondButton").html("Ernie Ladd");
			$("#thirdButton").html("Steve McMichael");
			$("#fourthButton").html("Bronko Nagurski");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==20) {
			$("#firstButton").html("3-4");
			$("#secondButton").html("46");
			$("#thirdButton").html("Tampa 2");
			$("#fourthButton").html("Zone Blitz");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==21) {
			$("#firstButton").html("Darrelle Revis");
			$("#secondButton").html("Rob Gronkowski");
			$("#thirdButton").html("Julian Edelman");
			$("#fourthButton").html("Malcolm Butler");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==22) {
			$("#firstButton").html(".514");
			$("#secondButton").html(".489");
			$("#thirdButton").html(".458");
			$("#fourthButton").html(".437");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==23) {
			$("#firstButton").html("New York Yankees");
			$("#secondButton").html("Kansas City Royals");
			$("#thirdButton").html("Pittsburgh Pirates");
			$("#fourthButton").html("Los Angeles Dodgers");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==24) {
			$("#firstButton").html("Oakland Athletics");
			$("#secondButton").html("Boston Red Sox");
			$("#thirdButton").html("Montreal Expos");
			$("#fourthButton").html("Texas Rangers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==25) {
			$("#firstButton").html("Kyle Boller");
			$("#secondButton").html("Michael Vick");
			$("#thirdButton").html("Joey Harrington");
			$("#fourthButton").html("Byron Leftwich");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==26) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Joe Flacco");
			$("#thirdButton").html("Eli Manning");
			$("#fourthButton").html("Philip Rivers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==27) {
			$("#firstButton").html("5");
			$("#secondButton").html("6");
			$("#thirdButton").html("7");
			$("#fourthButton").html("8");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==28) {
			$("#firstButton").html("Indianapolis Colts");
			$("#secondButton").html("Jacksonville Jaguars");
			$("#thirdButton").html("Tennessee Titans");
			$("#fourthButton").html("New York Giants");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==29) {
			$("#firstButton").html("Michael Strahan");
			$("#secondButton").html("Jared Allen");
			$("#thirdButton").html("Mark Gastineau");
			$("#fourthButton").html("Justin Houston");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==30) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Peyton Manning");
			$("#thirdButton").html("Drew Brees");
			$("#fourthButton").html("Dan Marino");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==31) {
			$("#firstButton").html("Adrian Peterson");
			$("#secondButton").html("Barry Sanders");
			$("#thirdButton").html("Eric Dickerson");
			$("#fourthButton").html("O.J. Simpson");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==32) {
			$("#firstButton").html("Tony Gonzalez");
			$("#secondButton").html("Randy Moss");
			$("#thirdButton").html("Terrell Owens");
			$("#fourthButton").html("Jerry Rice");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==33) {
			$("#firstButton").html("John Elway");
			$("#secondButton").html("Tom Brady");
			$("#thirdButton").html("Brett Farve");
			$("#fourthButton").html("Dan Marino");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==34) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Joe Montana");
			$("#thirdButton").html("Peyton Manning");
			$("#fourthButton").html("Brett Farve");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==35) {
			$("#firstButton").html("Rod Woodson");
			$("#secondButton").html("Ed Reed");
			$("#thirdButton").html("Darren Sharper");
			$("#fourthButton").html("Paul Krause");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==36) {
			$("#firstButton").html("Ray Lewis");
			$("#secondButton").html("Jessie Tuggle");
			$("#thirdButton").html("Clay Matthews");
			$("#fourthButton").html("Junior Seau");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==37) {
			$("#firstButton").html("Charles Haley");
			$("#secondButton").html("'Mean Joe' Greene");
			$("#thirdButton").html("Mike Wagner");
			$("#fourthButton").html("Scott Norwood");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==38) {
			$("#firstButton").html("Memorial Coliseum");
			$("#secondButton").html("Soldier Field");
			$("#thirdButton").html("Lambeau Field");
			$("#fourthButton").html("Arrowhead Stadium");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==39) {
			$("#firstButton").html("1966");
			$("#secondButton").html("1967");
			$("#thirdButton").html("1968");
			$("#fourthButton").html("1969");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==40) {
			$("#firstButton").html("Steelers");
			$("#secondButton").html("Packers");
			$("#thirdButton").html("Chiefs");
			$("#fourthButton").html("49ers");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==41) {
			$("#firstButton").html("Bill Belichick");
			$("#secondButton").html("Tony Dungy");
			$("#thirdButton").html("John Madden");
			$("#fourthButton").html("Vince Lombardi");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==42) {
			$("#firstButton").html("Michael Jackson");
			$("#secondButton").html("Madona");
			$("#thirdButton").html("Janet Jackson");
			$("#fourthButton").html("Lady Gaga");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==43) {
			$("#firstButton").html("The Beaneaters");
			$("#secondButton").html("The Minutemen");
			$("#thirdButton").html("The Bay State Patriots");
			$("#fourthButton").html("The Americans");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==44) {
			$("#firstButton").html("300");
			$("#secondButton").html("22,000");
			$("#thirdButton").html("86,000");
			$("#fourthButton").html("32,000,000");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==45) {
			$("#firstButton").html("The Miami Dolphins");
			$("#secondButton").html("The Green Bay Packers");
			$("#thirdButton").html("The Denver Broncos");
			$("#fourthButton").html("The Tennessee Titans");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==46) {
			$("#firstButton").html("40");
			$("#secondButton").html("400");
			$("#thirdButton").html("4,000");
			$("#fourthButton").html("40,000");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==47) {
			$("#firstButton").html("Jared Allen");
			$("#secondButton").html("Fred Dryer");
			$("#thirdButton").html("Ray Rice");
			$("#fourthButton").html("Lawrence Taylor");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==48) {
			$("#firstButton").html("50");
			$("#secondButton").html("500");
			$("#thirdButton").html("5,000");
			$("#fourthButton").html("50,000");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==49) {
			$("#firstButton").html("The Browns");
			$("#secondButton").html("The Bills");
			$("#thirdButton").html("The Raiders");
			$("#fourthButton").html("The Cardinals");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==50) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Tom Brady");
			$("#thirdButton").html("Tom Brady");
			$("#fourthButton").html("Tom Brady");
			$("#firstButton").addClass("answer");
			$("#secondButton").addClass("answer");
			$("#thirdButton").addClass("answer");
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
