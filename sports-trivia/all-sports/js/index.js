$(document).ready(function(){

	var count = 1;

	//array with all the questions in it
	var questions = [{q:"Which position did Babe Ruth play for the Red Sox?",qNum:1},{q:"Who is the only rookie to win the Home Run Derby?",qNum:2},{q:"Who has the most home runs all time?",qNum:3},{q:"How many years did the Curse of the Bambino last?",qNum:4},{q:"How long was the Cub's World Series title drought?",qNum:5},{q:"How many career hits did Pete Rose have?",qNum:6},{q:"What was Ted Williams' career batting average?",qNum:7},{q:"What is the .200 batting average line called?",qNum:8},{q:"Which number did Babe Ruth wear?",qNum:9},{q:"When were numbers introduced on jerseys in the MLB?",qNum:10},{q:"What did jersey numbers initially mean in baseball?",qNum:11},{q:"Which baseball player has the most rings?",qNum:12},{q:"How many rings did Babe Ruth have?",qNum:13},{q:"How many championships do the Yankees have?",qNum:14},{q:"What is the Yankees' nickname?",qNum:15},{q:"Who's Double-A baseball team did Michael Jordan play for?",qNum:16},{q:"Which baseball team did Bo Jackson play for?",qNum:17},{q:"Which baseball team did Deion Sanders play for?",qNum:18},{q:"What was Michael Jordan's career batting average?",qNum:19},{q:"What is the record for the most pitches thrown in a single game?",qNum:20},{q:"When did Babe Ruth retire?",qNum:21},{q:"What is the single-season home run record?",qNum:22},{q:"Which baseball player famously had ALS?",qNum:23},{q:"When was baseball's All-Star Game invented?",qNum:24},{q:"What is the single-season batting average record?",qNum:25},{q:"Which baseball player famously changed his skin color?",qNum:26},{q:"Which baseball player famously did a backflip in celebration?",qNum:27},{q:"What is the Roberto Clemente award for?",qNum:28},{q:"Who famously caught a fly ball over the shoulder in the 1954 World Series?",qNum:29},{q:"Who hit a walkoff Home Run to win the 1993 World Series?",qNum:30},{q:"Who famously waved a ball fair in the 1975 World Series?",qNum:31},{q:"Who famously let the winning out go between their legs in the 1986 World Series?",qNum:32},{q:"Which team did Babe Ruth play for besides the Red Sox and the Yankees?",qNum:33},{q:"What is the lowest ERA ever achieved by a pitcher in one season?",qNum:34},{q:"When was baseball invented?",qNum:35},{q:"Where was baseball invented?",qNum:36},{q:"Who holds the single-season hit record at 238?",qNum:37},{q:"What was the first MLB team?",qNum:38},{q:"What is the oldest active park in baseball?",qNum:39},{q:"What is the height of the Green Monster?",qNum:40},{q:"Who are the newest teams in baseball?",qNum:41},{q:"Who has the most consecutive starts in baseball?",qNum:42},{q:"Who was the first player to pitch a perfect game?",qNum:43},{q:"Who held the longest hit streak in baseball?",qNum:44},{q:"When did Yogi Berra quit school?",qNum:45},{q:"Who has the most baseball MVP awards with seven?",qNum:46},{q:"Who was the youngest player ever elected to MLB's Hall of Fame?",qNum:47},{q:"Who was the first player to have their number retired?",qNum:48},{q:"Who won the first World Series?",qNum:49},{q:"Which pitcher famously threw a no-hitter while high on LSD?",qNum:50},{q:"Who was the only NBA player to ever score 100 points in a single game?",qNum:51},{q:"Which player scored 81 points against the Toronto raptors?",qNum:52},{q:"Which NBA team won the 1970-71 NBA Championship?",qNum:53},{q:"How far is the NBA 3 point line from the basket?",qNum:54},{q:"How far is the free throw line from the basket?",qNum:55},{q:"What is the length of a full sized NBA court?",qNum:56},{q:"Who invented basketball?",qNum:57},{q:"Which NBA team has won the most NBA championships?",qNum:58},{q:"Who was the only women to ever get drafted into the NBA?",qNum:59},{q:"Which NBA player holds the most points scored in an entire career?",qNum:60},{q:"Which NBA head coach holds the record for most wins?",qNum:61},{q:"Which NBA team has a mascot wearing number 95 on it?",qNum:62},{q:"Who won NBA coach of the year in 2000-01?",qNum:63},{q:"Who won NBA coach of the year in 1970-71?",qNum:64},{q:"Who won NBA rookie of the year in 1985-86?",qNum:65},{q:"Who holds the record for the most three-pointers in a game with 13?",qNum:66},{q:"Who holds the record for most rebounds in a single game at 55?",qNum:67},{q:"Which team holds the record for most 3-point field goals ever in a game at 25?",qNum:68},{q:"Who was the youngest player to ever be named NBA rookie of the year?",qNum:69},{q:"What was Kareem Abdul-Jabbar's name before he changed it?",qNum:70},{q:"What year was the NBA founded?",qNum:71},{q:"Who is the highest paid NBA player currently?",qNum:72},{q:"How many teams are in the NBA?",qNum:73},{q:"How many logos have the Golden State Warriors had throughout history?",qNum:74},{q:"Which player technically broke the NBA color barrier in the 1947-1948 season?",qNum:75},{q:"In 1994 and 1995, which team did Hakeem Olajuwon win back-to-back titles with?",qNum:76},{q:"Before they were the 'Memphis Grizzlies,' what were they called?",qNum:77},{q:"The NBA Finals championship trophy is called the ________ Championship Trophy.",qNum:78},{q:"Whose silhouette serves as the modern day logo of the NBA?",qNum:79},{q:"Which player has the most championship rings?",qNum:80},{q:"Who was the only college player selected to the 1992 Olympics 'Dream Team'?",qNum:81},{q:"Which number did Michael Jordan wear other than 23?",qNum:82},{q:"What team did Michael Jordan play for after the Bulls?",qNum:83},{q:"Which NBA player is nicknamed 'The Mailman'?",qNum:84},{q:"How many teams did Charles Barkley play for in his career?",qNum:85},{q:"Who was the only player voted MVP in both the ABA and the NBA?",qNum:86},{q:"How many championships have the New York Knicks won?",qNum:87},{q:"Which NBA player holds the career record for total assists and steals?",qNum:88},{q:"How many times has Michael Jordan won the Slam Dunk contest?",qNum:89},{q:"What famous Comedy did Kareem Abdul-Jabbar star in?",qNum:90},{q:"Michael Jordan was drafted third overall in the 1984 NBA draft. Who went second?",qNum:91},{q:"How many points did Kobe Bryant score in his final game?",qNum:92},{q:"What number did Kobe Bryant wear before 24?",qNum:93},{q:"Which team did Shaq spend his final year in the NBA playing for?",qNum:94},{q:"Which NBA player averaged over 50 points per game for an entire season?",qNum:95},{q:"Which former NBA player is Cole Henderson related to?",qNum:96},{q:"Which player has won the NBA MVP a record six times?",qNum:97},{q:"Who is the only player to win the Slam Dunk contest three times?",qNum:98},{q:"Which one of the following is the first North American sports figure to win a championship as a player, coach, and executive?",qNum:99},{q:"Kobe Bryant's nickname was 'Black Mamba'. Which NBA legend was nicknamed 'White Mamba'?",qNum:100},{q:"Who has the most wins as a head coach in the NFL?",qNum:101},{q:"Which NFL team features a helmet decal only on one side of the helmet?",qNum:102},{q:"Who is the last non-quarterback to win NFL MVP?",qNum:103},{q:"This current NFL quarterback, a 2010 Pro Bowler, never started a game at QB in college.",qNum:104},{q:"How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",qNum:105},{q:"Which of these teams was NOT an original NFL team that moved over to the AFC?",qNum:106},{q:"Who is the only player enshrined in Canton AND in the CFL Hall of Fame?",qNum:107},{q:"Which state has produced the most pro football Hall of Famers?",qNum:108},{q:"Who is the only Super Bowl MVP to have played on the losing team?",qNum:109},{q:"Who is the NFL's all-time leading rusher?",qNum:110},{q:"Which NFL team has not made the playoffs in this century?",qNum:111},{q:"Who holds the single-season record for touchdown receptions with 23?",qNum:112},{q:"In the 1985 draft, The 49ers traded picks with which franchise to select Jerry Rice with the 16th pick?",qNum:113},{q:"Who holds the record for the longest field goal in NFL history?",qNum:114},{q:"Which of these defensive players did not win a Super Bowl MVP?",qNum:115},{q:"How long was Scott Norwood's 'Wide Right' miss to end Super Bowl XXV?",qNum:116},{q:"The Seattle Seahawks pay which university a licensing fee to use the '12th Man' slogan?",qNum:117},{q:"Who currently has the highest career passer rating (Min. 1,500 attempts) at 106.0?",qNum:118},{q:"Who is the only member of both the Pro Football Hall of Fame, and the Professional Wrestling Hall of Fame?",qNum:119},{q:"As defensive coordinator of the 1985 Bears, Buddy Ryan is hailed as the architect of which defensive scheme?",qNum:120},{q:"As Super Bowl 49 MVP, Tom Brady received a Chevrolet truck. To which teammate did he give the keys?",qNum:121},{q:"What is Peyton Manning's playoff winning percentage?",qNum:122},{q:"Which Major League Baseball team selected both John Elway and Dan Marino in the 1979 amateur draft?",qNum:123},{q:"Which MLB team drafted Tom Brady in the 18th round?",qNum:124},{q:"Which quarterback was taken before Drew Brees in the 2001 draft?",qNum:125},{q:"Which quarterback has the longest active streak of consecutive starts at 178?",qNum:126},{q:"How many Super Bowl rings does Bill Belichick have?",qNum:127},{q:"Which team did Peyton Manning play for before the Denver Broncos?",qNum:128},{q:"Who holds the record for the most sacks in a season?",qNum:129},{q:"Who has the record for the most passing yards in a season?",qNum:130},{q:"Who has the record for most rushing yards in a season?",qNum:131},{q:"Who holds the record for all-time receiving yards?",qNum:132},{q:"Which quarterback has the most completions ever in the NFL?",qNum:133},{q:"Which quarterback holds the single-season touchdown record?",qNum:134},{q:"Which NFL player has the most interceptions of all-time?",qNum:135},{q:"Which NFL player holds the record for most tackles of all-time?",qNum:136},{q:"Which non-quarterback NFL player has the most rings?",qNum:137},{q:"Which current NFL stadium is the oldest?",qNum:138},{q:"In which year was the first Super Bowl played?",qNum:139},{q:"Who won the first Super Bowl?",qNum:140},{q:"Which famous NFL head coach has a popular football videogame named after him?",qNum:141},{q:"Which Super Bowl half-time performer famously had a wardrobe malfunction?",qNum:142},{q:"What were the New England Patriots almost named?",qNum:143},{q:"How many people are on the Green Bay Packers' season ticket waiting list?",qNum:144},{q:"Which NFL team is publicly owned?",qNum:145},{q:"How many footballs does Wilson produce per day?",qNum:146},{q:"Which NFL player recorded two safties in one game?",qNum:147},{q:"How many people watched the first televised football game?",qNum:148},{q:"Which NFL team has the longest Super Bowl victory drought?",qNum:149},{q:"Who is the greatest quarterback of all time?",qNum:150},{q:"Who has the only foghorn as a goal horn?",qNum:151},{q:"Who was Bobby Orr playing for when he won the Hart and the Conn Smythe Trophies in the same season for the second time?",qNum:152},{q:"What is the diameter of a hockey puck?",qNum:153},{q:"Who gets the Adams Award?",qNum:154},{q:"Which coach won the most Stanley Cups?",qNum:155},{q:"Who gets the Selke Trophy?",qNum:156},{q:"Who was the first goalie to shoot and score?",qNum:157},{q:"Who is the most record-holding playe?",qNum:158},{q:"Where is the Hockey Hall of Fame?",qNum:159},{q:"What were hockey pucks originally made of?",qNum:160},{q:"Which Hall of Fame came first?",qNum:161},{q:"What team did the NHL's only female player, Manon Rheaume, play for?",qNum:162},{q:"Which player's trade deal was one dollar?",qNum:163},{q:"Which team killed a bat on the ice during a game?",qNum:164},{q:"Who was Stanley, the namesake of the Stanley Cup?",qNum:165},{q:"How many pucks are used in an average game?",qNum:166},{q:"How are hockey pucks prepared for the game?",qNum:167},{q:"What is the goal song for the Chicago Blackhawks?",qNum:168},{q:"How much water weight do players lose on average from a game?",qNum:169},{q:"Who was the 2004 NHL Rookie of the Year?",qNum:170},{q:"Who was the first NHL commissioner?",qNum:171},{q:"Who roared to NHL stardom as the 'Golden Jet'?",qNum:172},{q:"What was the first NHL team to win back-to-back Stanley Cup titles?",qNum:173},{q:"What year was the offsides rule introduced by the NHL?",qNum:174},{q:"The first NHL All-Star game was held as a benefit for what injured star?",qNum:175},{q:"Who was the fastest player in NHL history to reach 1,000 career points?",qNum:176},{q:"What player set an NHL record in 1976, with 10 points in one game?",qNum:177},{q:"Who was the first NHL player to score 50 goals in a season?",qNum:178},{q:"Who was the first hockey player to win Sportsman of the Year honors from Sports Illustrated?",qNum:179},{q:"Which goalie has won the most career Vezina Trophies?",qNum:180},{q:"Who was the first defenceman in history to reach 1,000 career points?",qNum:181},{q:"Which franchise did not enter the NHL during the six-team expansion in 1967?",qNum:182},{q:"Who is the only player to record 100 points and 100 penalty minutes in his rookie season?",qNum:183},{q:"Who was the first player to play for all three New York state hockey teams?",qNum:184},{q:"Who was the first player in history to score three shorthanded goals in one game?",qNum:185},{q:"Which player has won the most Stanley Cups without having ever played for the Montreal Canadiens?",qNum:186},{q:"Who was the first player to record 300 PIM in a season?",qNum:187},{q:"Which was the first U.S.-based franchise to be granted membership in the NHL?",qNum:188},{q:"Which goaltender did Wayne Gretzky score the most career goals on?",qNum:189},{q:"Which goalkeeper was selected before Martin Brodeur in the 1990 NHL draft?",qNum:190},{q:"After Sidney Crosby, which player selected in the 2005 draft currently has the most career regular-season points?",qNum:191},{q:"Who was the first American-born player to captain a team to the Stanley Cup?",qNum:192},{q:"Which player has been traded for Chris Pronger twice?",qNum:193},{q:"Who was the last active player to play in the “Original Six” era?",qNum:194},{q:"Who has recorded the most career points in the Stanley Cup final?",qNum:195},{q:"Who was the last member of the Montreal Canadiens to score 50 goals in a season?",qNum:196},{q:"Who holds the record for most consecutive wins by a goaltender in the Stanley Cup final?",qNum:197},{q:"Which of these goalies has the most career ties?",qNum:198},{q:"Who was the first defenceman to win the Conn Smythe Trophy?",qNum:199},{q:"Which NHL player holds the record for most points in a season with 215?",qNum:200},{q:"What is the biggest win in soccer?",qNum:201},{q:"What colour was Real Madrid's 2014-15 season away kit?",qNum:202},{q:"What year did Manchester United sign Robin Van Persie?",qNum:203},{q:"Which number does Neymar wear for PSG?",qNum:204},{q:"Which club loaned David Beckham twice?",qNum:205},{q:"How many clubs did Zlatan Ibrahimovic play for?",qNum:206},{q:"Which club did Michael Owen play for?",qNum:207},{q:"How many goals did Gareth Bale score for Southampton?",qNum:208},{q:"Who won the 2002 Fifa World Cup?",qNum:209},{q:"How long did Neymar play for Santos?",qNum:210},{q:"Which club has Messi played for besides Barcelona?",qNum:211},{q:"Which club has won the most Champions League trophies?",qNum:212},{q:"Who won the 2012 Ballon d'or?",qNum:213},{q:"How many Champions League trophies have Manchester United won?",qNum:214},{q:"Who is the most expensive transfer of all time?",qNum:215},{q:"Who hosted the 1962 World Cup?",qNum:216},{q:"Who won FIFA World Player of the year in 2006?",qNum:217},{q:"Who came in third place in the 1998 World Cup?",qNum:218},{q:"How far away from the goal is a penalty kick?",qNum:219},{q:"Who won the 1950 World Cup?",qNum:220},{q:"Which country has won the most World Cups?",qNum:221},{q:"Which team did Pele play for in America?",qNum:222},{q:"How many World Cups did Maradona win?",qNum:223},{q:"How many trophies has Dani Alves won?",qNum:224},{q:"How many teams has Christiano Ronaldo played for?",qNum:225},{q:"Who has won the most Ballon d'ors?",qNum:226},{q:"How many Golden Boots has Christiano Ronaldo won?",qNum:227},{q:"How many clubs have won the Champions League trebel?",qNum:228},{q:"How many Champions League trophies have Real Madrid won?",qNum:229},{q:"Which club was the most recent winner of the Champions League trebel?",qNum:230},{q:"In which World Cup final did Zinedine Zidane headbutt Marco Materazzi?",qNum:231},{q:"Which famous soccer player has a move named after him?",qNum:232},{q:"Which player has won the most major trophies?",qNum:233},{q:"How many Champions League trebels have Real Madrid won?",qNum:234},{q:"Which player famously scored a World Cup final goal with his hand dubbed the 'hand of God'?",qNum:235},{q:"Which of the following countries qualified for UEFA Euro 2012?",qNum:236},{q:"How far have America gone in the World Cup?",qNum:237},{q:"Who was named Chelsea manager in June 2013?",qNum:238},{q:"Where is Ronaldinho from?",qNum:239},{q:"Which soccer player has a history of biting other players?",qNum:240},{q:"Which famous goalkeeper suffered a horrific head injury and wears head gear?",qNum:241},{q:"How long was Manchester City's title drought before their dramatic 2012 title victory?",qNum:242},{q:"Which team has been waiting the longest to regain the Premier League title?",qNum:243},{q:"Who has been named Chelsea's Player of the Year three different times?",qNum:244},{q:"Who was captain of the 2014 Real Madrid squad?",qNum:245},{q:"Where did Gareth Bale transfer from to joint Real Madrid in 2013?",qNum:246},{q:"Which Real Madrid Manager served for 604 matches?",qNum:247},{q:"What number did Christiano Ronaldo first wear at Real Madrid?",qNum:248},{q:"What years did Ronaldinho play with Barcelona?",qNum:249},{q:"Which team set the record for most points in a Premier League season during the 2004-2005 season?",qNum:250}];

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
		else if (questionNumber==51) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Wilt Chamberlain");
			$("#thirdButton").html("Larry Bird");
			$("#fourthButton").html("LeBron James");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==52) {
			$("#firstButton").html("Kobe Bryant");
			$("#secondButton").html("Dwayne Wade");
			$("#thirdButton").html("Steph Curry");
			$("#fourthButton").html("Brian Scalabrine");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==53) {
			$("#firstButton").html("Lakers");
			$("#secondButton").html("Bucks");
			$("#thirdButton").html("Rockets");
			$("#fourthButton").html("Magic");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==54) {
			$("#firstButton").html("23 feet 9 inches");
			$("#secondButton").html("23 feet 4 inches");
			$("#thirdButton").html("22 feet 6 inches");
			$("#fourthButton").html("20 feet 8 inches");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==55) {
			$("#firstButton").html("20 feet");
			$("#secondButton").html("18 feet");
			$("#thirdButton").html("16 feet");
			$("#fourthButton").html("15 feet");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==56) {
			$("#firstButton").html("95 feet");
			$("#secondButton").html("94 feet");
			$("#thirdButton").html("92 feet");
			$("#fourthButton").html("90 feet");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==57) {
			$("#firstButton").html("David Stern");
			$("#secondButton").html("Tony Henderson");
			$("#thirdButton").html("John Williams");
			$("#fourthButton").html("James Naismith");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==58) {
			$("#firstButton").html("Celtics");
			$("#secondButton").html("Lakers");
			$("#thirdButton").html("Bucks");
			$("#fourthButton").html("Pistons");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==59) {
			$("#firstButton").html("Lisa Leslie");
			$("#secondButton").html("Tina Thompson");
			$("#thirdButton").html("Lusia Harris");
			$("#fourthButton").html("Sheryl Swoopes");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==60) {
			$("#firstButton").html("Reggie Miller");
			$("#secondButton").html("Michael Jordan");
			$("#thirdButton").html("Kareem Abdul-Jabbar");
			$("#fourthButton").html("Patrick Ewing");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==61) {
			$("#firstButton").html("Pat Riley");
			$("#secondButton").html("Phil Jackson");
			$("#thirdButton").html("Don Nelson");
			$("#fourthButton").html("Lenny Wilkens");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==62) {
			$("#firstButton").html("Magic");
			$("#secondButton").html("Raptors");
			$("#thirdButton").html("Cavaliers");
			$("#fourthButton").html("Mavericks");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==63) {
			$("#firstButton").html("Gregg Popovich");
			$("#secondButton").html("Rick Carlisle");
			$("#thirdButton").html("Larry Brown");
			$("#fourthButton").html("Lenny Wilkens");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==64) {
			$("#firstButton").html("Bill Sharman");
			$("#secondButton").html("Dick Motta");
			$("#thirdButton").html("Ray Scott");
			$("#fourthButton").html("Red Holzman");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==65) {
			$("#firstButton").html("Patrick Ewing");
			$("#secondButton").html("Oscar Robinson");
			$("#thirdButton").html("Mark Jackson");
			$("#fourthButton").html("Michael Jordan");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==66) {
			$("#firstButton").html("Ray Allen");
			$("#secondButton").html("Steph Curry");
			$("#thirdButton").html("Kobe Bryant");
			$("#fourthButton").html("John Havlicek");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==67) {
			$("#firstButton").html("Kareem Abdul-Jabbar");
			$("#secondButton").html("Wilt Chamberlain");
			$("#thirdButton").html("Bill Russell");
			$("#fourthButton").html("Anthony Davis");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==68) {
			$("#firstButton").html("Lakers");
			$("#secondButton").html("Cavaliers");
			$("#thirdButton").html("Celtics");
			$("#fourthButton").html("Warriors");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==69) {
			$("#firstButton").html("Derrick Rose");
			$("#secondButton").html("Bob Pettit");
			$("#thirdButton").html("Dave Cowens");
			$("#fourthButton").html("Steph Curry");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==70) {
			$("#firstButton").html("Cassius Clay");
			$("#secondButton").html("Wes Unseld");
			$("#thirdButton").html("Bob McAdoo");
			$("#fourthButton").html("Lew Alcindor");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==71) {
			$("#firstButton").html("1949");
			$("#secondButton").html("1946");
			$("#thirdButton").html("1936");
			$("#fourthButton").html("1928");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==72) {
			$("#firstButton").html("Steph Curry");
			$("#secondButton").html("Russell Westbrook");
			$("#thirdButton").html("LeBron James");
			$("#fourthButton").html("James Harden");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==73) {
			$("#firstButton").html("25");
			$("#secondButton").html("30");
			$("#thirdButton").html("35");
			$("#fourthButton").html("40");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==74) {
			$("#firstButton").html("2");
			$("#secondButton").html("5");
			$("#thirdButton").html("7");
			$("#fourthButton").html("12");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==75) {
			$("#firstButton").html("Earl Lloyd");
			$("#secondButton").html("George Mikan");
			$("#thirdButton").html("Nat Clifton");
			$("#fourthButton").html("Wataru Misaka");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==76) {
			$("#firstButton").html("Rockets");
			$("#secondButton").html("Cavaliers");
			$("#thirdButton").html("Magic");
			$("#fourthButton").html("Pistons");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==77) {
			$("#firstButton").html("Vancouver Grizzlies");
			$("#secondButton").html("Richmond Grizzlies");
			$("#thirdButton").html("Montreal Grizzlies");
			$("#fourthButton").html("Tampa Bay Grizzlies");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==78) {
			$("#firstButton").html("Bill Russell");
			$("#secondButton").html("Larry O'Brien");
			$("#thirdButton").html("NBA Finals");
			$("#fourthButton").html("Brian Scalabrine");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==79) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Bill Cousy");
			$("#thirdButton").html("Jerry West");
			$("#fourthButton").html("Pat Riley");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==80) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Robert Horry");
			$("#thirdButton").html("Sam Jones");
			$("#fourthButton").html("Bill Russell");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==81) {
			$("#firstButton").html("Shaq");
			$("#secondButton").html("Christian Laettner");
			$("#thirdButton").html("Chris Mullin");
			$("#fourthButton").html("Chris Webber");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==82) {
			$("#firstButton").html("0");
			$("#secondButton").html("8");
			$("#thirdButton").html("24");
			$("#fourthButton").html("45");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==83) {
			$("#firstButton").html("Celtics");
			$("#secondButton").html("Raptors");
			$("#thirdButton").html("Heat");
			$("#fourthButton").html("Wizards");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==84) {
			$("#firstButton").html("Dennis Rodman");
			$("#secondButton").html("Karl Malone");
			$("#thirdButton").html("Shaq");
			$("#fourthButton").html("Blake Griffin");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==85) {
			$("#firstButton").html("One");
			$("#secondButton").html("Two");
			$("#thirdButton").html("Three");
			$("#fourthButton").html("Four");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==86) {
			$("#firstButton").html("Moses Malone");
			$("#secondButton").html("Julius Erving");
			$("#thirdButton").html("Bill Russell");
			$("#fourthButton").html("Magic Johnson");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==87) {
			$("#firstButton").html("2");
			$("#secondButton").html("4");
			$("#thirdButton").html("6");
			$("#fourthButton").html("8");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==88) {
			$("#firstButton").html("John Stockton");
			$("#secondButton").html("Magic Johnson");
			$("#thirdButton").html("Jason Kidd");
			$("#fourthButton").html("Steve Nash");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==89) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==90) {
			$("#firstButton").html("Caddy Shack");
			$("#secondButton").html("Young Frankenstein");
			$("#thirdButton").html("Trading Places");
			$("#fourthButton").html("Airplane");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==91) {
			$("#firstButton").html("Akeem Olajuwon");
			$("#secondButton").html("Sam Bowie");
			$("#thirdButton").html("Sam Perkins");
			$("#fourthButton").html("Charles Barkley");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==92) {
			$("#firstButton").html("45");
			$("#secondButton").html("50");
			$("#thirdButton").html("55");
			$("#fourthButton").html("60");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==93) {
			$("#firstButton").html("8");
			$("#secondButton").html("23");
			$("#thirdButton").html("45");
			$("#fourthButton").html("99");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==94) {
			$("#firstButton").html("Cavaliers");
			$("#secondButton").html("Celtics");
			$("#thirdButton").html("Suns");
			$("#fourthButton").html("Heat");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==95) {
			$("#firstButton").html("Magic Johnson");
			$("#secondButton").html("Tim Duncan");
			$("#thirdButton").html("Wilt Chamberlain");
			$("#fourthButton").html("Michael Jordan");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==96) {
			$("#firstButton").html("Chris Dudley");
			$("#secondButton").html("Jason Williams");
			$("#thirdButton").html("John Stockton");
			$("#fourthButton").html("Brian Scalabrine");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==97) {
			$("#firstButton").html("Kareem Abdul-Jabbar");
			$("#secondButton").html("Michael Jordan");
			$("#thirdButton").html("LeBron James");
			$("#fourthButton").html("Tim Duncan");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==98) {
			$("#firstButton").html("Michael Jordan");
			$("#secondButton").html("Zach LaVine");
			$("#thirdButton").html("Jason Richardson");
			$("#fourthButton").html("Nate Robinson");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==99) {
			$("#firstButton").html("Pat Riley");
			$("#secondButton").html("Lenny Wilkins");
			$("#thirdButton").html("Phil Jackson");
			$("#fourthButton").html("Larry Bird");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==100) {
			$("#firstButton").html("Dirk Nowitzki");
			$("#secondButton").html("Chris Dudley");
			$("#thirdButton").html("Jason Kidd");
			$("#fourthButton").html("Brian Scalabrine");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==101) {
			$("#firstButton").html("Curly Lambeau");
			$("#secondButton").html("George Halas");
			$("#thirdButton").html("Tom Landry");
			$("#fourthButton").html("Don Shula");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==102) {
			$("#firstButton").html("Houston Texans");
			$("#secondButton").html("Jacksonville Jaguars");
			$("#thirdButton").html("Pittsburgh Steelers");
			$("#fourthButton").html("Tennessee Titans");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==103) {
			$("#firstButton").html("Adrian Peterson");
			$("#secondButton").html("Shaun Alexander");
			$("#thirdButton").html("Ray Lewis");
			$("#fourthButton").html("LaDainian Tomlinson");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==104) {
			$("#firstButton").html("Matt Schaub");
			$("#secondButton").html("Matt Cassel");
			$("#thirdButton").html("Matt Moore");
			$("#fourthButton").html("Matt Flynn");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==105) {
			$("#firstButton").html("2");
			$("#secondButton").html("3");
			$("#thirdButton").html("4");
			$("#fourthButton").html("5");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==106) {
			$("#firstButton").html("Browns");
			$("#secondButton").html("Colts");
			$("#thirdButton").html("Steelers");
			$("#fourthButton").html("Raiders");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==107) {
			$("#firstButton").html("Fred Biletnikoff");
			$("#secondButton").html("Warren Moon");
			$("#thirdButton").html("Joe Theismann");
			$("#fourthButton").html("Doug Flutie");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==108) {
			$("#firstButton").html("California");
			$("#secondButton").html("Ohio");
			$("#thirdButton").html("Texas");
			$("#fourthButton").html("Pennsylvania");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==109) {
			$("#firstButton").html("Larry Fitzgerald");
			$("#secondButton").html("Chuck Howley");
			$("#thirdButton").html("Dan Marino");
			$("#fourthButton").html("Steve McNair");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==110) {
			$("#firstButton").html("Emmitt Smith");
			$("#secondButton").html("Walter Payton");
			$("#thirdButton").html("Barry Sanders");
			$("#fourthButton").html("Eric Dickerson");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==111) {
			$("#firstButton").html("Buffalo Bills");
			$("#secondButton").html("Cleveland Browns");
			$("#thirdButton").html("Chicago Bears");
			$("#fourthButton").html("LA Rams");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==112) {
			$("#firstButton").html("Jerry Rice");
			$("#secondButton").html("Calvin Johnson");
			$("#thirdButton").html("Terrell Owens");
			$("#fourthButton").html("Randy Moss");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==113) {
			$("#firstButton").html("Green Bay Packers");
			$("#secondButton").html("Indianapolis Colts");
			$("#thirdButton").html("New England Patriots");
			$("#fourthButton").html("Seattle Seahwaks");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==114) {
			$("#firstButton").html("Tom Dempsey");
			$("#secondButton").html("Matt Prater");
			$("#thirdButton").html("Jason Elam");
			$("#fourthButton").html("Sebastian Janikowski");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==115) {
			$("#firstButton").html("Richard Dent");
			$("#secondButton").html("Lawrence Taylor");
			$("#thirdButton").html("Harvey Martin");
			$("#fourthButton").html("Ray Lewis");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==116) {
			$("#firstButton").html("43 yards");
			$("#secondButton").html("45 yards");
			$("#thirdButton").html("47 yards");
			$("#fourthButton").html("49 yards");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==117) {
			$("#firstButton").html("Texas A&M");
			$("#secondButton").html("Auburn");
			$("#thirdButton").html("Clemson");
			$("#fourthButton").html("Wisconsin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==118) {
			$("#firstButton").html("Peyton Manning");
			$("#secondButton").html("Tom Brady");
			$("#thirdButton").html("Drew Brees");
			$("#fourthButton").html("Aaron Rodgers");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==119) {
			$("#firstButton").html("Alex Karras");
			$("#secondButton").html("Ernie Ladd");
			$("#thirdButton").html("Steve McMichael");
			$("#fourthButton").html("Bronko Nagurski");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==120) {
			$("#firstButton").html("3-4");
			$("#secondButton").html("46");
			$("#thirdButton").html("Tampa 2");
			$("#fourthButton").html("Zone Blitz");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==121) {
			$("#firstButton").html("Darrelle Revis");
			$("#secondButton").html("Rob Gronkowski");
			$("#thirdButton").html("Julian Edelman");
			$("#fourthButton").html("Malcolm Butler");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==122) {
			$("#firstButton").html(".514");
			$("#secondButton").html(".489");
			$("#thirdButton").html(".458");
			$("#fourthButton").html(".437");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==123) {
			$("#firstButton").html("New York Yankees");
			$("#secondButton").html("Kansas City Royals");
			$("#thirdButton").html("Pittsburgh Pirates");
			$("#fourthButton").html("Los Angeles Dodgers");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==124) {
			$("#firstButton").html("Oakland Athletics");
			$("#secondButton").html("Boston Red Sox");
			$("#thirdButton").html("Montreal Expos");
			$("#fourthButton").html("Texas Rangers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==125) {
			$("#firstButton").html("Kyle Boller");
			$("#secondButton").html("Michael Vick");
			$("#thirdButton").html("Joey Harrington");
			$("#fourthButton").html("Byron Leftwich");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==126) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Joe Flacco");
			$("#thirdButton").html("Eli Manning");
			$("#fourthButton").html("Philip Rivers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==127) {
			$("#firstButton").html("5");
			$("#secondButton").html("6");
			$("#thirdButton").html("7");
			$("#fourthButton").html("8");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==128) {
			$("#firstButton").html("Indianapolis Colts");
			$("#secondButton").html("Jacksonville Jaguars");
			$("#thirdButton").html("Tennessee Titans");
			$("#fourthButton").html("New York Giants");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==129) {
			$("#firstButton").html("Michael Strahan");
			$("#secondButton").html("Jared Allen");
			$("#thirdButton").html("Mark Gastineau");
			$("#fourthButton").html("Justin Houston");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==130) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Peyton Manning");
			$("#thirdButton").html("Drew Brees");
			$("#fourthButton").html("Dan Marino");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==131) {
			$("#firstButton").html("Adrian Peterson");
			$("#secondButton").html("Barry Sanders");
			$("#thirdButton").html("Eric Dickerson");
			$("#fourthButton").html("O.J. Simpson");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==132) {
			$("#firstButton").html("Tony Gonzalez");
			$("#secondButton").html("Randy Moss");
			$("#thirdButton").html("Terrell Owens");
			$("#fourthButton").html("Jerry Rice");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==133) {
			$("#firstButton").html("John Elway");
			$("#secondButton").html("Tom Brady");
			$("#thirdButton").html("Brett Farve");
			$("#fourthButton").html("Dan Marino");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==134) {
			$("#firstButton").html("Tom Brady");
			$("#secondButton").html("Joe Montana");
			$("#thirdButton").html("Peyton Manning");
			$("#fourthButton").html("Brett Farve");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==135) {
			$("#firstButton").html("Rod Woodson");
			$("#secondButton").html("Ed Reed");
			$("#thirdButton").html("Darren Sharper");
			$("#fourthButton").html("Paul Krause");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==136) {
			$("#firstButton").html("Ray Lewis");
			$("#secondButton").html("Jessie Tuggle");
			$("#thirdButton").html("Clay Matthews");
			$("#fourthButton").html("Junior Seau");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==137) {
			$("#firstButton").html("Charles Haley");
			$("#secondButton").html("'Mean Joe' Greene");
			$("#thirdButton").html("Mike Wagner");
			$("#fourthButton").html("Scott Norwood");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==138) {
			$("#firstButton").html("Memorial Coliseum");
			$("#secondButton").html("Soldier Field");
			$("#thirdButton").html("Lambeau Field");
			$("#fourthButton").html("Arrowhead Stadium");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==139) {
			$("#firstButton").html("1966");
			$("#secondButton").html("1967");
			$("#thirdButton").html("1968");
			$("#fourthButton").html("1969");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==140) {
			$("#firstButton").html("Steelers");
			$("#secondButton").html("Packers");
			$("#thirdButton").html("Chiefs");
			$("#fourthButton").html("49ers");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==141) {
			$("#firstButton").html("Bill Belichick");
			$("#secondButton").html("Tony Dungy");
			$("#thirdButton").html("John Madden");
			$("#fourthButton").html("Vince Lombardi");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==142) {
			$("#firstButton").html("Michael Jackson");
			$("#secondButton").html("Madona");
			$("#thirdButton").html("Janet Jackson");
			$("#fourthButton").html("Lady Gaga");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==143) {
			$("#firstButton").html("The Beaneaters");
			$("#secondButton").html("The Minutemen");
			$("#thirdButton").html("The Bay State Patriots");
			$("#fourthButton").html("The Americans");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==144) {
			$("#firstButton").html("300");
			$("#secondButton").html("22,000");
			$("#thirdButton").html("86,000");
			$("#fourthButton").html("32,000,000");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==145) {
			$("#firstButton").html("The Miami Dolphins");
			$("#secondButton").html("The Green Bay Packers");
			$("#thirdButton").html("The Denver Broncos");
			$("#fourthButton").html("The Tennessee Titans");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==146) {
			$("#firstButton").html("40");
			$("#secondButton").html("400");
			$("#thirdButton").html("4,000");
			$("#fourthButton").html("40,000");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==147) {
			$("#firstButton").html("Jared Allen");
			$("#secondButton").html("Fred Dryer");
			$("#thirdButton").html("Ray Rice");
			$("#fourthButton").html("Lawrence Taylor");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==148) {
			$("#firstButton").html("50");
			$("#secondButton").html("500");
			$("#thirdButton").html("5,000");
			$("#fourthButton").html("50,000");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==149) {
			$("#firstButton").html("The Browns");
			$("#secondButton").html("The Bills");
			$("#thirdButton").html("The Raiders");
			$("#fourthButton").html("The Cardinals");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==150) {
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
		else if (questionNumber==151) {
			$("#firstButton").html("Red Wings");
			$("#secondButton").html("Devils");
			$("#thirdButton").html("Sharks");
			$("#fourthButton").html("Wild");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==152) {
			$("#firstButton").html("Penguins");
			$("#secondButton").html("Bruins");
			$("#thirdButton").html("Rangers");
			$("#fourthButton").html("Blackhawks");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==153) {
			$("#firstButton").html("2 inches");
			$("#secondButton").html("3 inches");
			$("#thirdButton").html("4 inches");
			$("#fourthButton").html("5 inches");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==154) {
			$("#firstButton").html("Best Player");
			$("#secondButton").html("Best Goalie");
			$("#thirdButton").html("Best Team");
			$("#fourthButton").html("Best Coach");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==155) {
			$("#firstButton").html("Scotty Bowman");
			$("#secondButton").html("Barry Trotz");
			$("#thirdButton").html("Randy Carlyle");
			$("#fourthButton").html("Dick Irvin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==156) {
			$("#firstButton").html("Best Enforcer");
			$("#secondButton").html("Best Defenseman");
			$("#thirdButton").html("Best Forward");
			$("#fourthButton").html("Best Coach");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==157) {
			$("#firstButton").html("Ron Hextall");
			$("#secondButton").html("Terry Sawchuk");
			$("#thirdButton").html("Turk Broda");
			$("#fourthButton").html("Chris Osgood");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==158) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Mario Lemieux");
			$("#thirdButton").html("Wayne Gretzky");
			$("#fourthButton").html("Bobby Hull");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==159) {
			$("#firstButton").html("Boston");
			$("#secondButton").html("Green Bay");
			$("#thirdButton").html("Montreal");
			$("#fourthButton").html("Toronto");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==160) {
			$("#firstButton").html("Duck bills");
			$("#secondButton").html("Cow patties");
			$("#thirdButton").html("Pig bladders");
			$("#fourthButton").html("Sawdust");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==161) {
			$("#firstButton").html("Hockey");
			$("#secondButton").html("Pro Football");
			$("#thirdButton").html("Soccer");
			$("#fourthButton").html("Curling");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==162) {
			$("#firstButton").html("Canucks");
			$("#secondButton").html("Flames");
			$("#thirdButton").html("Oilers");
			$("#fourthButton").html("Lightning");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==163) {
			$("#firstButton").html("Phil Esposito");
			$("#secondButton").html("Kris Draper");
			$("#thirdButton").html("Joe Sakic");
			$("#fourthButton").html("Chris Pronger");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==164) {
			$("#firstButton").html("Sharks");
			$("#secondButton").html("Wild");
			$("#thirdButton").html("Islanders");
			$("#fourthButton").html("Sabres");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==165) {
			$("#firstButton").html("Player");
			$("#secondButton").html("Coach");
			$("#thirdButton").html("Hockey's Inventor");
			$("#fourthButton").html("A Lord");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==166) {
			$("#firstButton").html("2");
			$("#secondButton").html("6");
			$("#thirdButton").html("9");
			$("#fourthButton").html("12");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==167) {
			$("#firstButton").html("Frozen");
			$("#secondButton").html("Heated");
			$("#thirdButton").html("Waxed");
			$("#fourthButton").html("Sanded");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==168) {
			$("#firstButton").html("'Black Betty'");
			$("#secondButton").html("'We're Gonna Score Tonight'");
			$("#thirdButton").html("'We Are the Champions'");
			$("#fourthButton").html("'Chelsea Dagger'");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==169) {
			$("#firstButton").html("1 Pound");
			$("#secondButton").html("3 Pounds");
			$("#thirdButton").html("5 Pounds");
			$("#fourthButton").html("7 Pounds");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==170) {
			$("#firstButton").html("Andrew Raycroft");
			$("#secondButton").html("Barett Jackman");
			$("#thirdButton").html("Trent Hunter");
			$("#fourthButton").html("Alexander Ovechkin");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==171) {
			$("#firstButton").html("Frank Calder");
			$("#secondButton").html("Gary Bettman");
			$("#thirdButton").html("Mike Barnett");
			$("#fourthButton").html("Wayne Gretzky");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==172) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Gordie Howe");
			$("#fourthButton").html("Bobby Hull");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==173) {
			$("#firstButton").html("Canadians");
			$("#secondButton").html("Bruins");
			$("#thirdButton").html("Senators");
			$("#fourthButton").html("Rangers");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==174) {
			$("#firstButton").html("1930");
			$("#secondButton").html("1950");
			$("#thirdButton").html("1970");
			$("#fourthButton").html("1990");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==175) {
			$("#firstButton").html("Eddie Shore");
			$("#secondButton").html("Ace Bailey");
			$("#thirdButton").html("Howie Morenz");
			$("#fourthButton").html("Sylvio Mantha");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==176) {
			$("#firstButton").html("Eddie Shore");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Guy Lefleur");
			$("#fourthButton").html("Mario Lemieux");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==177) {
			$("#firstButton").html("Bobby Clarke");
			$("#secondButton").html("Darryl Sittler");
			$("#thirdButton").html("Phil Esposito");
			$("#fourthButton").html("Wayne Gretzky");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==178) {
			$("#firstButton").html("Gordie Howe");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Bobby Orr");
			$("#fourthButton").html("Maurice Richard");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==179) {
			$("#firstButton").html("Bobby Orr");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Bob Bourne");
			$("#fourthButton").html("Mario Lemieux");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==180) {
			$("#firstButton").html("Dominik Hasek");
			$("#secondButton").html("Terry Sawchuk");
			$("#thirdButton").html("Glenn Hall");
			$("#fourthButton").html("Jacques Plante");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==181) {
			$("#firstButton").html("Denis Potvin");
			$("#secondButton").html("Bobby Orr");
			$("#thirdButton").html("Ray Bourque");
			$("#fourthButton").html("Phil Housley");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==182) {
			$("#firstButton").html("Flyers");
			$("#secondButton").html("Sabres");
			$("#thirdButton").html("Kings");
			$("#fourthButton").html("Penguins");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==183) {
			$("#firstButton").html("Sidney Crosby");
			$("#secondButton").html("Joe Nieuwendyk");
			$("#thirdButton").html("Stan Mikita");
			$("#fourthButton").html("Joe Thornton");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==184) {
			$("#firstButton").html("Tim Horton");
			$("#secondButton").html("Pat LaFontaine");
			$("#thirdButton").html("Kevin Weekes");
			$("#fourthButton").html("Mike Donnelly");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==185) {
			$("#firstButton").html("Luc Robitaille");
			$("#secondButton").html("Theo Fleury");
			$("#thirdButton").html("Sergei Fedorov");
			$("#fourthButton").html("Mark Recchi");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==186) {
			$("#firstButton").html("Red Kelly");
			$("#secondButton").html("Eddie Shore");
			$("#thirdButton").html("Wayne Gretzky");
			$("#fourthButton").html("Terry Sawchuk");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==187) {
			$("#firstButton").html("Howie Young");
			$("#secondButton").html("Keith Magnuson");
			$("#thirdButton").html("Dave Schultz");
			$("#fourthButton").html("Tiger Williams");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==188) {
			$("#firstButton").html("Bruins");
			$("#secondButton").html("Red Wings");
			$("#thirdButton").html("Rangers");
			$("#fourthButton").html("Americans");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==189) {
			$("#firstButton").html("Richard Brodeur");
			$("#secondButton").html("Mike Vernon");
			$("#thirdButton").html("Kirk McLean");
			$("#fourthButton").html("Daniel Berthiaume");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==190) {
			$("#firstButton").html("Felix Potvin");
			$("#secondButton").html("Trevor Kidd");
			$("#thirdButton").html("Jamie Storr");
			$("#fourthButton").html("Olaf Kolzig");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==191) {
			$("#firstButton").html("Bobby Ryan");
			$("#secondButton").html("Phil Kessel");
			$("#thirdButton").html("Anze Kopitar");
			$("#fourthButton").html("Jonathan Toews");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==192) {
			$("#firstButton").html("Brian Leetch");
			$("#secondButton").html("Derian Hatcher");
			$("#thirdButton").html("Mike Modano");
			$("#fourthButton").html("Mark Howe");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==193) {
			$("#firstButton").html("Joffrey Lupul");
			$("#secondButton").html("Dustin Penner");
			$("#thirdButton").html("Brendan Shanahan");
			$("#fourthButton").html("Curtis Joseph");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==194) {
			$("#firstButton").html("Tony Esposito");
			$("#secondButton").html("Gordie Howe");
			$("#thirdButton").html("Wayne Cashman");
			$("#fourthButton").html("Brad Park");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==195) {
			$("#firstButton").html("Maurice Richard");
			$("#secondButton").html("Wayne Gretzky");
			$("#thirdButton").html("Bryan Trottier");
			$("#fourthButton").html("Jean Béliveau");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==196) {
			$("#firstButton").html("Guy Lafleur");
			$("#secondButton").html("Mats Naslund");
			$("#thirdButton").html("Stéphane Richer");
			$("#fourthButton").html("Steve Shutt");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==197) {
			$("#firstButton").html("Turk Broda");
			$("#secondButton").html("Ken Dryden");
			$("#thirdButton").html("Billy Smith");
			$("#fourthButton").html("Grant Fuhr");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==198) {
			$("#firstButton").html("Glenn Hall");
			$("#secondButton").html("Patrick Roy");
			$("#thirdButton").html("Jacques Plante");
			$("#fourthButton").html("Tony Esposito");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==199) {
			$("#firstButton").html("Pierre Pilote");
			$("#secondButton").html("Bobby Orr");
			$("#thirdButton").html("Serge Savard");
			$("#fourthButton").html("Guy Lapointe");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==200) {
			$("#firstButton").html("Wayne Gretzky");
			$("#secondButton").html("Mario Lemieux");
			$("#thirdButton").html("Phil Esposito");
			$("#fourthButton").html("Bobby Orr");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==201) {
			$("#firstButton").html("57-0");
			$("#secondButton").html("37-0");
			$("#thirdButton").html("32-0");
			$("#fourthButton").html("30-1");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==202) {
			$("#firstButton").html("Red");
			$("#secondButton").html("Blue");
			$("#thirdButton").html("Black");
			$("#fourthButton").html("Pink");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==203) {
			$("#firstButton").html("2009");
			$("#secondButton").html("2010");
			$("#thirdButton").html("2011");
			$("#fourthButton").html("2012");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==204) {
			$("#firstButton").html("7");
			$("#secondButton").html("9");
			$("#thirdButton").html("10");
			$("#fourthButton").html("11");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==205) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Real Madrid");
			$("#thirdButton").html("LA Galaxy");
			$("#fourthButton").html("AC Milan");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==206) {
			$("#firstButton").html("1");
			$("#secondButton").html("4");
			$("#thirdButton").html("6");
			$("#fourthButton").html("10");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==207) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Liverpool");
			$("#thirdButton").html("Barcelona");
			$("#fourthButton").html("Real Madrid");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==208) {
			$("#firstButton").html("None");
			$("#secondButton").html("5");
			$("#thirdButton").html("8");
			$("#fourthButton").html("10");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==209) {
			$("#firstButton").html("Brazil");
			$("#secondButton").html("Germany");
			$("#thirdButton").html("Italy");
			$("#fourthButton").html("England");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==210) {
			$("#firstButton").html("2 years");
			$("#secondButton").html("5 years");
			$("#thirdButton").html("10 years");
			$("#fourthButton").html("14 years");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==211) {
			$("#firstButton").html("Real Madrid");
			$("#secondButton").html("AC Milan");
			$("#thirdButton").html("Monaco");
			$("#fourthButton").html("No Other Team");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==212) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("AC Milan");
			$("#thirdButton").html("Barcelona");
			$("#fourthButton").html("Real Madrid");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==213) {
			$("#firstButton").html("Ronaldo");
			$("#secondButton").html("Kaka");
			$("#thirdButton").html("Messi");
			$("#fourthButton").html("Iniesta");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==214) {
			$("#firstButton").html("0");
			$("#secondButton").html("2");
			$("#thirdButton").html("4");
			$("#fourthButton").html("6");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==215) {
			$("#firstButton").html("Paul Pogba");
			$("#secondButton").html("Messi");
			$("#thirdButton").html("Neymar");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==216) {
			$("#firstButton").html("Mexico");
			$("#secondButton").html("Chile");
			$("#thirdButton").html("Argentina");
			$("#fourthButton").html("England");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==217) {
			$("#firstButton").html("Fabio Cannavaro");
			$("#secondButton").html("Luis Figo");
			$("#thirdButton").html("Pavel Nedved");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==218) {
			$("#firstButton").html("Bulgaria");
			$("#secondButton").html("Turkey");
			$("#thirdButton").html("Croatia");
			$("#fourthButton").html("Portugal");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==219) {
			$("#firstButton").html("6 yards");
			$("#secondButton").html("12 yards");
			$("#thirdButton").html("15 yards");
			$("#fourthButton").html("18 yards");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==220) {
			$("#firstButton").html("Brazil");
			$("#secondButton").html("Uruguay");
			$("#thirdButton").html("Czechoslovakia");
			$("#fourthButton").html("West Germany");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==221) {
			$("#firstButton").html("England");
			$("#secondButton").html("Germany");
			$("#thirdButton").html("Brazil");
			$("#fourthButton").html("Italy");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==222) {
			$("#firstButton").html("New York Cosmos");
			$("#secondButton").html("LA Galaxy");
			$("#thirdButton").html("New York City FC");
			$("#fourthButton").html("Seattle Sounders");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==223) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==224) {
			$("#firstButton").html("34");
			$("#secondButton").html("35");
			$("#thirdButton").html("36");
			$("#fourthButton").html("37");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==225) {
			$("#firstButton").html("1");
			$("#secondButton").html("2");
			$("#thirdButton").html("3");
			$("#fourthButton").html("4");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==226) {
			$("#firstButton").html("Lionel Messi");
			$("#secondButton").html("Christiano Ronaldo");
			$("#thirdButton").html("Michel Platini");
			$("#fourthButton").html("Johan Cruyff");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==227) {
			$("#firstButton").html("2");
			$("#secondButton").html("3");
			$("#thirdButton").html("4");
			$("#fourthButton").html("5");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==228) {
			$("#firstButton").html("3");
			$("#secondButton").html("5");
			$("#thirdButton").html("7");
			$("#fourthButton").html("9");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==229) {
			$("#firstButton").html("8");
			$("#secondButton").html("10");
			$("#thirdButton").html("12");
			$("#fourthButton").html("14");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==230) {
			$("#firstButton").html("Real Madrid");
			$("#secondButton").html("Barcelona");
			$("#thirdButton").html("Inter Milan");
			$("#fourthButton").html("Bayern Munich");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==231) {
			$("#firstButton").html("1998");
			$("#secondButton").html("2002");
			$("#thirdButton").html("2006");
			$("#fourthButton").html("2010");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==232) {
			$("#firstButton").html("Lionel Messi");
			$("#secondButton").html("Steven Gerrard");
			$("#thirdButton").html("Ronaldinho");
			$("#fourthButton").html("Johan Cruyff");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==233) {
			$("#firstButton").html("Ibrahimovic");
			$("#secondButton").html("Dani Alves");
			$("#thirdButton").html("Ryan Giggs");
			$("#fourthButton").html("Maxwell");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==234) {
			$("#firstButton").html("0");
			$("#secondButton").html("1");
			$("#thirdButton").html("2");
			$("#fourthButton").html("3");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==235) {
			$("#firstButton").html("Zinedine Zidane");
			$("#secondButton").html("Diego Maradona");
			$("#thirdButton").html("Pelé");
			$("#fourthButton").html("Ronaldo");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==236) {
			$("#firstButton").html("Netherlands");
			$("#secondButton").html("Lithuania");
			$("#thirdButton").html("Iceland");
			$("#fourthButton").html("Switzerland");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==237) {
			$("#firstButton").html("Round of 32");
			$("#secondButton").html("Round of 16");
			$("#thirdButton").html("Quarter-Finals");
			$("#fourthButton").html("Semi-Finals");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==238) {
			$("#firstButton").html("Jose Mourinho");
			$("#secondButton").html("Andre Schurrle");
			$("#thirdButton").html("Bruce Buck");
			$("#fourthButton").html("Antonio Conte");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==239) {
			$("#firstButton").html("Argentina");
			$("#secondButton").html("Paraguay");
			$("#thirdButton").html("Chile");
			$("#fourthButton").html("Brazil");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==240) {
			$("#firstButton").html("Edison Cavani");
			$("#secondButton").html("Luis Suarez");
			$("#thirdButton").html("Neymar");
			$("#fourthButton").html("Christiano Ronaldo");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==241) {
			$("#firstButton").html("Gianluigi Buffon");
			$("#secondButton").html("Iker Casillas");
			$("#thirdButton").html("Peter Čhech");
			$("#fourthButton").html("Manuel Neuer");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==242) {
			$("#firstButton").html("20 Years");
			$("#secondButton").html("28 Years");
			$("#thirdButton").html("34 Years");
			$("#fourthButton").html("43 Years");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==243) {
			$("#firstButton").html("Sheffield United");
			$("#secondButton").html("Preston");
			$("#thirdButton").html("Tottenham");
			$("#fourthButton").html("West Brom");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==244) {
			$("#firstButton").html("Frank Lampard");
			$("#secondButton").html("John Terry");
			$("#thirdButton").html("Didier Drogba");
			$("#fourthButton").html("Juan Mata");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==245) {
			$("#firstButton").html("Xabi Alonso");
			$("#secondButton").html("Sergio Ramos");
			$("#thirdButton").html("Sami Khedira");
			$("#fourthButton").html("Iker Casillas");
			$("#fourthButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==246) {
			$("#firstButton").html("Manchester United");
			$("#secondButton").html("Tottenham");
			$("#thirdButton").html("Lyon");
			$("#fourthButton").html("Barcelona");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==247) {
			$("#firstButton").html("Jose Villalonga");
			$("#secondButton").html("Manuel Fleitas");
			$("#thirdButton").html("Miguel Munoz");
			$("#fourthButton").html("Leo Beenhakker");
			$("#thirdButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==248) {
			$("#firstButton").html("7");
			$("#secondButton").html("9");
			$("#thirdButton").html("10");
			$("#fourthButton").html("11");
			$("#secondButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==249) {
			$("#firstButton").html("2003-2008");
			$("#secondButton").html("2001-2003");
			$("#thirdButton").html("2008-2010");
			$("#fourthButton").html("2010-2012");
			$("#firstButton").addClass("answer");
			questions.splice(rand,1);
		}
		else if (questionNumber==250) {
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
		if (count==26) {
			$("#nextQuestion").html("Finish Trivia");
		}
		else if (count==27) {
			$("h2").addClass("hide");
			$("h1").addClass("hide");
			$("p").removeClass("hide");
			$("#topButtons button").addClass("hide");
			$("#container").css("margin-top","10%");
		}
	});

});
