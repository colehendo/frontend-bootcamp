$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"Which position did Babe Ruth play for the Red Sox?",qNum:1},{q:"Who is the only rookie to win the Home Run Derby?",qNum:2},{q:"Who has the most home runs all time?",qNum:3},{q:"How many years did the Curse of the Bambino last?",qNum:4},{q:"How long was the Cub's World Series title drought?",qNum:5},{q:"How many career hits did Pete Rose have?",qNum:6},{q:"What was Ted Williams' career batting average?",qNum:7},{q:"What is the .200 batting average line called?",qNum:8},{q:"Which number did Babe Ruth wear?",qNum:9},{q:"When were numbers introduced on jerseys in the MLB?",qNum:10},{q:"What did jersey numbers initially mean in baseball?",qNum:11},{q:"Which baseball player has the most rings?",qNum:12},{q:"How many rings did Babe Ruth have?",qNum:13},{q:"How many championships do the Yankees have?",qNum:14},{q:"What is the Yankees' nickname?",qNum:15},{q:"Who's Double-A baseball team did Michael Jordan play for?",qNum:16},{q:"Which baseball team did Bo Jackson play for?",qNum:17},{q:"Which baseball team did Deion Sanders play for?",qNum:18},{q:"What was Michael Jordan's career batting average?",qNum:19},{q:"What is the record for the most pitches thrown in a single game?",qNum:20},{q:"When did Babe Ruth retire?",qNum:21},{q:"What is the single-season home run record?",qNum:22},{q:"Which baseball player famously had ALS?",qNum:23},{q:"When was baseball's All-Star Game invented?",qNum:24},{q:"What is the single-season batting average record?",qNum:25},{q:"Which baseball player famously changed his skin color?",qNum:26},{q:"Which baseball player famously did a backflip in celebration?",qNum:27},{q:"What is the Roberto Clemente award for?",qNum:28},{q:"Who famously caught a fly ball over the shoulder in the 1954 World Series?",qNum:29},{q:"Who hit a walkoff Home Run to win the 1993 World Series?",qNum:30},{q:"Who famously waved a ball fair in the 1975 World Series?",qNum:31},{q:"Who famously let the winning out go between their legs in the 1986 World Series?",qNum:32},{q:"Which team did Babe Ruth play for besides the Red Sox and the Yankees?",qNum:33},{q:"What is the lowest ERA ever achieved by a pitcher in one season?",qNum:34},{q:"When was baseball invented?",qNum:35},{q:"Where was baseball invented?",qNum:36},{q:"Who holds the single-season hit record at 238?",qNum:37},{q:"What was the first MLB team?",qNum:38},{q:"What is the oldest active park in baseball?",qNum:39},{q:"What is the height of the Green Monster?",qNum:40},{q:"Who are the newest teams in baseball?",qNum:41},{q:"Who has the most consecutive starts in baseball?",qNum:42},{q:"Who was the first player to pitch a perfect game?",qNum:43},{q:"Who held the longest hit streak in baseball?",qNum:44},{q:"When did Yogi Berra quit school?",qNum:45},{q:"Who has the most baseball MVP awards with seven?",qNum:46},{q:"Who was the youngest player ever elected to MLB's Hall of Fame?",qNum:47},{q:"Who was the first player to have their number retired?",qNum:48},{q:"Who won the first World Series?",qNum:49},{q:"Which pitcher famously threw a no-hitter while high on LSD?",qNum:50}];

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
			$("#firstButton").html("Center Field");
			$("#secondButton").html("Designated Hitter");
			$("#thirdButton").html("Pitcher");
			$("#fourthButton").html("Second Base");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==2) {
			$("#firstButton").html("Giancarlo Stanton");
			$("#secondButton").html("Barry Bonds");
			$("#thirdButton").html("Alex Rodriguez");
			$("#fourthButton").html("Aaron Judge");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==3) {
			$("#firstButton").html("Hank Aaron");
			$("#secondButton").html("Barry Bonds");
			$("#thirdButton").html("Alex Rodriguez");
			$("#fourthButton").html("Babe Ruth");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==4) {
			$("#firstButton").html("85 Years");
			$("#secondButton").html("86 Years");
			$("#thirdButton").html("87 Years");
			$("#fourthButton").html("88 Years");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==5) {
			$("#firstButton").html("108 Years");
			$("#secondButton").html("110 Years");
			$("#thirdButton").html("117 Years");
			$("#fourthButton").html("122 Years");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==6) {
			$("#firstButton").html("3698 Hits");
			$("#secondButton").html("3982 Hits");
			$("#thirdButton").html("4174 Hits");
			$("#fourthButton").html("4256 Hits");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==7) {
			$("#firstButton").html(".322");
			$("#secondButton").html(".333");
			$("#thirdButton").html(".344");
			$("#fourthButton").html(".355");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==8) {
			$("#firstButton").html("The Mendoza Line");
			$("#secondButton").html("The Cy Young Line");
			$("#thirdButton").html("Ty Cobb's Worst Nightmare");
			$("#fourthButton").html("The A-Rod Line");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==9) {
			$("#firstButton").html("3");
			$("#secondButton").html("5");
			$("#thirdButton").html("11");
			$("#fourthButton").html("23");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==10) {
			$("#firstButton").html("1901");
			$("#secondButton").html("1916");
			$("#thirdButton").html("1924");
			$("#fourthButton").html("1931");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==11) {
			$("#firstButton").html("Nothing");
			$("#secondButton").html("Field Position");
			$("#thirdButton").html("Batting Order");
			$("#fourthButton").html("Popularity");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==12) {
			$("#firstButton").html("Babe Ruth");
			$("#secondButton").html("Yogi Berra");
			$("#thirdButton").html("Derek Jeter");
			$("#fourthButton").html("Joe DiMaggio");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==13) {
			$("#firstButton").html("6");
			$("#secondButton").html("7");
			$("#thirdButton").html("8");
			$("#fourthButton").html("9");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==14) {
			$("#firstButton").html("21");
			$("#secondButton").html("23");
			$("#thirdButton").html("25");
			$("#fourthButton").html("27");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==15) {
			$("#firstButton").html("The Fantastic Franchise");
			$("#secondButton").html("The Evil Empire");
			$("#thirdButton").html("The Terrific Team");
			$("#fourthButton").html("The Cool Club");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==16) {
			$("#firstButton").html("White Sox");
			$("#secondButton").html("Red Sox");
			$("#thirdButton").html("Yankees");
			$("#fourthButton").html("Dodgers");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==17) {
			$("#firstButton").html("Angels");
			$("#secondButton").html("Athletics");
			$("#thirdButton").html("Royals");
			$("#fourthButton").html("Cubs");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==18) {
			$("#firstButton").html("Marlins");
			$("#secondButton").html("Giants");
			$("#thirdButton").html("Rays");
			$("#fourthButton").html("Braves");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==19) {
			$("#firstButton").html(".176");
			$("#secondButton").html(".198");
			$("#thirdButton").html(".202");
			$("#fourthButton").html(".232");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==20) {
			$("#firstButton").html("345 (1920)");
			$("#secondButton").html("228 (1963)");
			$("#thirdButton").html("164 (1989)");
			$("#fourthButton").html("172 (1993)");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==21) {
			$("#firstButton").html("1935");
			$("#secondButton").html("1936");
			$("#thirdButton").html("1937");
			$("#fourthButton").html("1938");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==22) {
			$("#firstButton").html("67");
			$("#secondButton").html("69");
			$("#thirdButton").html("71");
			$("#fourthButton").html("73");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==23) {
			$("#firstButton").html("Mark McGwire");
			$("#secondButton").html("Alex Rodriguez");
			$("#thirdButton").html("Ozzie Smith");
			$("#fourthButton").html("Lou Gehrig");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==24) {
			$("#firstButton").html("1932");
			$("#secondButton").html("1933");
			$("#thirdButton").html("1934");
			$("#fourthButton").html("1935");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==25) {
			$("#firstButton").html(".440");
			$("#secondButton").html(".423");
			$("#thirdButton").html(".406");
			$("#fourthButton").html(".397");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==26) {
			$("#firstButton").html("Roberto Clemente");
			$("#secondButton").html("Barry Bonds");
			$("#thirdButton").html("Sammy Sosa");
			$("#fourthButton").html("Ty Cobb");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==27) {
			$("#firstButton").html("Willie Mays");
			$("#secondButton").html("Ozzie Smith");
			$("#thirdButton").html("Ted Williams");
			$("#fourthButton").html("Pablo Sandoval");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==28) {
			$("#firstButton").html("Sportsmanship");
			$("#secondButton").html("Best Outfielder");
			$("#thirdButton").html("Funniest Blooper");
			$("#fourthButton").html("Highest Batting Average");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==29) {
			$("#firstButton").html("Ken Griffey Sr.");
			$("#secondButton").html("Joe DiMaggio");
			$("#thirdButton").html("Roberto Clemente");
			$("#fourthButton").html("Willie Mays");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==30) {
			$("#firstButton").html("Ken Griffey Jr.");
			$("#secondButton").html("Joe Carter");
			$("#thirdButton").html("Tony Gwynn");
			$("#fourthButton").html("Sammy Sosa");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==31) {
			$("#firstButton").html("Reggie Jackson");
			$("#secondButton").html("Johnny Bench");
			$("#thirdButton").html("Pete Rose");
			$("#fourthButton").html("Carlton Fisk");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==32) {
			$("#firstButton").html("Billy Buckner");
			$("#secondButton").html("Mike Schmidt");
			$("#thirdButton").html("Wade Boggs");
			$("#fourthButton").html("Rod Carew");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==33) {
			$("#firstButton").html("Brooklyn Dodgers");
			$("#secondButton").html("Boston Braves");
			$("#thirdButton").html("Washington Senators");
			$("#fourthButton").html("New York Giants");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==34) {
			$("#firstButton").html("0.796 (1910)");
			$("#secondButton").html("0.857 (1880)");
			$("#thirdButton").html("0.961 (1914)");
			$("#fourthButton").html("1.038 (1906)");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==35) {
			$("#firstButton").html("1839");
			$("#secondButton").html("1852");
			$("#thirdButton").html("1879");
			$("#fourthButton").html("1899");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==36) {
			$("#firstButton").html("Boston, MA");
			$("#secondButton").html("New York, NY");
			$("#thirdButton").html("Springfield, MA");
			$("#fourthButton").html("Cooperstown, NY");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==37) {
			$("#firstButton").html("Ed Delahanty");
			$("#secondButton").html("Ty Cobb");
			$("#thirdButton").html("George Sisler");
			$("#fourthButton").html("Ichiro Suzuki");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==38) {
			$("#firstButton").html("Chicago Orphans");
			$("#secondButton").html("Cleveland Bluebirds");
			$("#thirdButton").html("Philadelphia Athletics");
			$("#fourthButton").html("Cincinnati Red Stockings");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==39) {
			$("#firstButton").html("Shea Stadium");
			$("#secondButton").html("Fenway Park");
			$("#thirdButton").html("Wrigley Field");
			$("#fourthButton").html("Yankee Stadium");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==40) {
			$("#firstButton").html("9.88 m");
			$("#secondButton").html("10.64 m");
			$("#thirdButton").html("11.33 m");
			$("#fourthButton").html("12.5 m");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==41) {
			$("#firstButton").html("Rays & Diamondbacks");
			$("#secondButton").html("Diamondbacks & Astros");
			$("#thirdButton").html("Astros & Nationals");
			$("#fourthButton").html("Nationals & Rays");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==42) {
			$("#firstButton").html("Lou Gehrig");
			$("#secondButton").html("Derek Jeter");
			$("#thirdButton").html("Cal Ripken Jr.");
			$("#fourthButton").html("Tony Gwynn");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==43) {
			$("#firstButton").html("Walter Johnson");
			$("#secondButton").html("Lee Richmond");
			$("#thirdButton").html("Cy Young");
			$("#fourthButton").html("Sandy Koufax");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==44) {
			$("#firstButton").html("Pete Rose");
			$("#secondButton").html("Joe DiMaggio");
			$("#thirdButton").html("Ichiro Suzuki");
			$("#fourthButton").html("Ted Williams");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==45) {
			$("#firstButton").html("He Never Went");
			$("#secondButton").html("8th Grade");
			$("#thirdButton").html("11th Grade");
			$("#fourthButton").html("He Graduated College");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==46) {
			$("#firstButton").html("Barry Bonds");
			$("#secondButton").html("Babe Ruth");
			$("#thirdButton").html("Nolan Ryan");
			$("#fourthButton").html("Willie Mays");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==47) {
			$("#firstButton").html("Lou Gehrig");
			$("#secondButton").html("Sandy Koufax");
			$("#thirdButton").html("Don Drysdale");
			$("#fourthButton").html("Mordecai Brown");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==48) {
			$("#firstButton").html("Ty Cobb");
			$("#secondButton").html("Babe Ruth");
			$("#thirdButton").html("Lou Gehrig");
			$("#fourthButton").html("Jackie Robinson");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==49) {
			$("#firstButton").html("Boston Americans");
			$("#secondButton").html("Brooklyn Superbas");
			$("#thirdButton").html("Cleveland Naps");
			$("#fourthButton").html("Boston Beaneaters");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==50) {
			$("#firstButton").html("Bartolo Colon");
			$("#secondButton").html("Curt Schilling");
			$("#thirdButton").html("Greg Maddux");
			$("#fourthButton").html("Dock Ellis");
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
