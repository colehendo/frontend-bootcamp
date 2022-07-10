$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"Who has the only foghorn as a goal horn?",qNum:1},{q:"Who was Bobby Orr playing for when he won the Hart and the Conn Smythe Trophies in the same season for the second time?",qNum:2},{q:"What is the diameter of a hockey puck?",qNum:3},{q:"Who gets the Adams Award?",qNum:4},{q:"Which coach won the most Stanley Cups?",qNum:5},{q:"Who gets the Selke Trophy?",qNum:6},{q:"Who was the first goalie to shoot and score?",qNum:7},{q:"Who is the most record-holding playe?",qNum:8},{q:"Where is the Hockey Hall of Fame?",qNum:9},{q:"What were hockey pucks originally made of?",qNum:10},{q:"Which Hall of Fame came first?",qNum:11},{q:"What team did the NHL's only female player, Manon Rheaume, play for?",qNum:12},{q:"Which player's trade deal was one dollar?",qNum:13},{q:"Which team killed a bat on the ice during a game?",qNum:14},{q:"Who was Stanley, the namesake of the Stanley Cup?",qNum:15},{q:"How many pucks are used in an average game?",qNum:16},{q:"How are hockey pucks prepared for the game?",qNum:17},{q:"What is the goal song for the Chicago Blackhawks?",qNum:18},{q:"How much water weight do players lose on average from a game?",qNum:19},{q:"Who was the 2004 NHL Rookie of the Year?",qNum:20},{q:"Who was the first NHL commissioner?",qNum:21},{q:"Who roared to NHL stardom as the 'Golden Jet'?",qNum:22},{q:"What was the first NHL team to win back-to-back Stanley Cup titles?",qNum:23},{q:"What year was the offsides rule introduced by the NHL?",qNum:24},{q:"The first NHL All-Star game was held as a benefit for what injured star?",qNum:25},{q:"Who was the fastest player in NHL history to reach 1,000 career points?",qNum:26},{q:"What player set an NHL record in 1976, with 10 points in one game?",qNum:27},{q:"Who was the first NHL player to score 50 goals in a season?",qNum:28},{q:"Who was the first hockey player to win Sportsman of the Year honors from Sports Illustrated?",qNum:29},{q:"Which goalie has won the most career Vezina Trophies?",qNum:30},{q:"Who was the first defenceman in history to reach 1,000 career points?",qNum:31},{q:"Which franchise did not enter the NHL during the six-team expansion in 1967?",qNum:32},{q:"Who is the only player to record 100 points and 100 penalty minutes in his rookie season?",qNum:33},{q:"Who was the first player to play for all three New York state hockey teams?",qNum:34},{q:"Who was the first player in history to score three shorthanded goals in one game?",qNum:35},{q:"Which player has won the most Stanley Cups without having ever played for the Montreal Canadiens?",qNum:36},{q:"Who was the first player to record 300 PIM in a season?",qNum:37},{q:"Which was the first U.S.-based franchise to be granted membership in the NHL?",qNum:38},{q:"Which goaltender did Wayne Gretzky score the most career goals on?",qNum:39},{q:"Which goalkeeper was selected before Martin Brodeur in the 1990 NHL draft?",qNum:40},{q:"After Sidney Crosby, which player selected in the 2005 draft currently has the most career regular-season points?",qNum:41},{q:"Who was the first American-born player to captain a team to the Stanley Cup?",qNum:42},{q:"Which player has been traded for Chris Pronger twice?",qNum:43},{q:"Who was the last active player to play in the “Original Six” era?",qNum:44},{q:"Who has recorded the most career points in the Stanley Cup final?",qNum:45},{q:"Who was the last member of the Montreal Canadiens to score 50 goals in a season?",qNum:46},{q:"Who holds the record for most consecutive wins by a goaltender in the Stanley Cup final?",qNum:47},{q:"Which of these goalies has the most career ties?",qNum:48},{q:"Who was the first defenceman to win the Conn Smythe Trophy?",qNum:49},{q:"Which NHL player holds the record for most points in a season with 215?",qNum:50}];

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
			$("#firstButton").html("Red Wings");
			$("#secondButton").html("Devils");
			$("#thirdButton").html("Sharks");
			$("#fourthButton").html("Wild");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==2) {
			$("#firstButton").html("Penguins");
			$("#secondButton").html("Brunins");
			$("#thirdButton").html("Rangers");
			$("#fourthButton").html("Blackhawks");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==3) {
			$("#firstButton").html("2 inches");
			$("#secondButton").html("3 inches");
			$("#thirdButton").html("4 inches");
			$("#fourthButton").html("5 inches");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==4) {
			$("#firstButton").html("Best Player");
			$("#secondButton").html("Best Goalie");
			$("#thirdButton").html("Best Team");
			$("#fourthButton").html("Best Coach");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==5) {
			$("#firstButton").html("Scotty Bowman");
			$("#secondButton").html("Barry Trotz");
			$("#thirdButton").html("Randy Carlyle");
			$("#fourthButton").html("Dick Irvin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==6) {
			$("#firstButton").html("Best Enforcer");
			$("#secondButton").html("Best Defenseman");
			$("#thirdButton").html("Best Forward");
			$("#fourthButton").html("Best Coach");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==7) {
			$("#firstButton").html("Ron Hextall");
			$("#secondButton").html("Terry Sawchuk");
			$("#thirdButton").html("Turk Broda");
			$("#fourthButton").html("Chris Osgood");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==8) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Mario Lemieux");
			$("#thirdButton").html("Wayne Gretzky");
			$("#fourthButton").html("Bobby Hull");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==9) {
			$("#firstButton").html("Boston");
			$("#secondButton").html("Green Bay");
			$("#thirdButton").html("Montreal");
			$("#fourthButton").html("Toronto");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==10) {
			$("#firstButton").html("Duck bills");
			$("#secondButton").html("Cow patties");
			$("#thirdButton").html("Pig bladders");
			$("#fourthButton").html("Sawdust");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==11) {
			$("#firstButton").html("Hockey");
			$("#secondButton").html("Pro Football");
			$("#thirdButton").html("Soccer");
			$("#fourthButton").html("Curling");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==12) {
			$("#firstButton").html("Canucks");
			$("#secondButton").html("Flames");
			$("#thirdButton").html("Oilers");
			$("#fourthButton").html("Lightning");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==13) {
			$("#firstButton").html("Phil Esposito");
			$("#secondButton").html("Kris Draper");
			$("#thirdButton").html("Joe Sakic");
			$("#fourthButton").html("Chris Pronger");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==14) {
			$("#firstButton").html("Sharks");
			$("#secondButton").html("Wild");
			$("#thirdButton").html("Islanders");
			$("#fourthButton").html("Sabres");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==15) {
			$("#firstButton").html("Player");
			$("#secondButton").html("Coach");
			$("#thirdButton").html("Hockey's Inventor");
			$("#fourthButton").html("A Lord");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==16) {
			$("#firstButton").html("2");
			$("#secondButton").html("6");
			$("#thirdButton").html("9");
			$("#fourthButton").html("12");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==17) {
			$("#firstButton").html("Frozen");
			$("#secondButton").html("Heated");
			$("#thirdButton").html("Waxed");
			$("#fourthButton").html("Sanded");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==18) {
			$("#firstButton").html("'Black Betty'");
			$("#secondButton").html("'We're Gonna Score Tonight'");
			$("#thirdButton").html("'We Are the Champions'");
			$("#fourthButton").html("'Chelsea Dagger'");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==19) {
			$("#firstButton").html("1 Pound");
			$("#secondButton").html("3 Pounds");
			$("#thirdButton").html("5 Pounds");
			$("#fourthButton").html("7 Pounds");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==20) {
			$("#firstButton").html("Andrew Raycroft");
			$("#secondButton").html("Barett Jackman");
			$("#thirdButton").html("Trent Hunter");
			$("#fourthButton").html("Alexander Ovechkin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==21) {
			$("#firstButton").html("Frank Calder");
			$("#secondButton").html("Gary Bettman");
			$("#thirdButton").html("Mike Barnett");
			$("#fourthButton").html("Wayne Gretzky");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==22) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Gordie Howe");
			$("#fourthButton").html("Bobby Hull");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==23) {
			$("#firstButton").html("Canadians");
			$("#secondButton").html("Bruins");
			$("#thirdButton").html("Senators");
			$("#fourthButton").html("Rangers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==24) {
			$("#firstButton").html("1930");
			$("#secondButton").html("1950");
			$("#thirdButton").html("1970");
			$("#fourthButton").html("1990");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==25) {
			$("#firstButton").html("Eddie Shore");
			$("#secondButton").html("Ace Bailey");
			$("#thirdButton").html("Howie Morenz");
			$("#fourthButton").html("Sylvio Mantha");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==26) {
			$("#firstButton").html("Eddie Shore");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Guy Lefleur");
			$("#fourthButton").html("Mario Lemieux");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==27) {
			$("#firstButton").html("Bobby Clarke");
			$("#secondButton").html("Darryl Sittler");
			$("#thirdButton").html("Phil Esposito");
			$("#fourthButton").html("Wayne Gretzky");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==28) {
			$("#firstButton").html("Gordie Howe");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Bobby Orr");
			$("#fourthButton").html("Maurice Richard");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==29) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Bob Bourne");
			$("#fourthButton").html("Mario Lemieux");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==30) {
			$("#firstButton").html("Dominik Hasek");
			$("#secondButton").html("Terry Sawchuk");
			$("#thirdButton").html("Glenn Hall");
			$("#fourthButton").html("Jacques Plante");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==31) {
			$("#firstButton").html("Denis Potvin");
			$("#secondButton").html("Bobby Orr");
			$("#thirdButton").html("Ray Bourque");
			$("#fourthButton").html("Phil Housley");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==32) {
			$("#firstButton").html("Flyers");
			$("#secondButton").html("Sabres");
			$("#thirdButton").html("Kings");
			$("#fourthButton").html("Penguins");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==33) {
			$("#firstButton").html("Sidney Crosby");
			$("#secondButton").html("Joe Nieuwendyk");
			$("#thirdButton").html("Stan Mikita");
			$("#fourthButton").html("Joe Thornton");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==34) {
			$("#firstButton").html("Tim Horton");
			$("#secondButton").html("Pat LaFontaine");
			$("#thirdButton").html("Kevin Weekes");
			$("#fourthButton").html("Mike Donnelly");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==35) {
			$("#firstButton").html("Luc Robitaille");
			$("#secondButton").html("Theo Fleury");
			$("#thirdButton").html("Sergei Fedorov");
			$("#fourthButton").html("Mark Recchi");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==36) {
			$("#firstButton").html("Red Kelly");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Wayne Gretzky");
			$("#fourthButton").html("Terry Sawchuk");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==37) {
			$("#firstButton").html("Howie Young");
			$("#secondButton").html("Keith Magnuson");
			$("#thirdButton").html("Dave Schultz");
			$("#fourthButton").html("Tiger Williams");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==38) {
			$("#firstButton").html("Bruins");
			$("#secondButton").html("Red Wings");
			$("#thirdButton").html("Rangers");
			$("#fourthButton").html("Americans");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==39) {
			$("#firstButton").html("Richard Brodeur");
			$("#secondButton").html("Mike Vernon");
			$("#thirdButton").html("Kirk McLean");
			$("#fourthButton").html("Daniel Berthiaume");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==40) {
			$("#firstButton").html("Felix Potvin");
			$("#secondButton").html("Trevor Kidd");
			$("#thirdButton").html("Jamie Storr");
			$("#fourthButton").html("Olaf Kolzig");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==41) {
			$("#firstButton").html("Bobby Ryan");
			$("#secondButton").html("Phil Kessel");
			$("#thirdButton").html("Anze Kopitar");
			$("#fourthButton").html("Jonathan Toews");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==42) {
			$("#firstButton").html("Brian Leetch");
			$("#secondButton").html("Derian Hatcher");
			$("#thirdButton").html("Mike Modano");
			$("#fourthButton").html("Mark Howe");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==43) {
			$("#firstButton").html("Joffrey Lupul");
			$("#secondButton").html("Dustin Penner");
			$("#thirdButton").html("Brendan Shanahan");
			$("#fourthButton").html("Curtis Joseph");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==44) {
			$("#firstButton").html("Tony Esposito");
			$("#secondButton").html("Gordie Howe");
			$("#thirdButton").html("Wayne Cashman");
			$("#fourthButton").html("Brad Park");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==45) {
			$("#firstButton").html("Maurice Richard");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Bryan Trottier");
			$("#fourthButton").html("Jean Béliveau");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==46) {
			$("#firstButton").html("Guy Lafleur");
			$("#secondButton").html("Mats Naslund");
			$("#thirdButton").html("Stéphane Richer");
			$("#fourthButton").html("Steve Shutt");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==47) {
			$("#firstButton").html("Turk Broda");
			$("#secondButton").html("Ken Dryden");
			$("#thirdButton").html("Billy Smith");
			$("#fourthButton").html("Grant Fuhr");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==48) {
			$("#firstButton").html("Glenn Hall");
			$("#secondButton").html("Patrick Roy");
			$("#thirdButton").html("Jacques Plante");
			$("#fourthButton").html("Tony Esposito");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==49) {
			$("#firstButton").html("Pierre Pilote");
			$("#secondButton").html("Bobby Orr");
			$("#thirdButton").html("Serge Savard");
			$("#fourthButton").html("Guy Lapointe");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==50) {
			$("#firstButton").html("Wayne Gretzky");
			$("#secondButton").html("Mario Lemieux");
			$("#thirdButton").html("Phil Esposito");
			$("#fourthButton").html("Bobby Orr");
			$("#firstButton").addClass("answer");
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
