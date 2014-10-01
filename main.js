console.log('Welcome to Javascript Homework');
console.log('To complete this assignment, change the code in main.js so that all of the following statements return true');


console.log('---------------------------')
console.log(' Booleans  / Numbers       ')
console.log('---------------------------')

var bOne   = (2 * 5  === 10);

var bTwo   = (2 > 4  === false);

var bThree = (4 >= 3 === true);

var bFour  = (4 > 3) && (2 >= 1);

var bFive  = (4 >= 1) || (5 <= 3);

var bSix   = (10 % 3 != 0);

console.log('---------------------------')
console.log('Question 1: ' + bOne);
console.log('Question 2: ' + bTwo);
console.log('Question 3: ' + bThree);
console.log('Question 4: ' + bFour);
console.log('Question 5: ' + bFive);
console.log('Question 6: ' + bSix);


console.log('---------------------------')
console.log(' Arrays                    ')
console.log('---------------------------')

var names = [ 'John', 'Sally', 'Mark', 'Mary'];
var ages  = [     15,      24,     45,     19];

var aOne   = (names[1] === 'Sally');

var aTwo   = (names.length === 4);

var aThree = (names.join() === 'John,Sally,Mark,Mary');

var aFour  = (names.reverse()[3] === 'John'); // Don't forget to reference the documentation when you're confused by a method. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

var aFive  = (names[2].toUpperCase() === 'SALLY');

var aSix   = (names.reverse().concat(ages).toString() === ['John', 'Sally', 'Mark', 'Mary', 15, 24, 45, 19].toString());

console.log('---------------------------')
console.log('Question 1: ' + aOne);
console.log('Question 2: ' + aTwo);
console.log('Question 3: ' + aThree);
console.log('Question 4: ' + aFour);
console.log('Question 5: ' + aFive);
console.log('Question 6: ' + aSix);

console.log('---------------------------')
console.log(' Strings                   ')
console.log('---------------------------')

var prose = "Where are we going?";
var fact  = "I left my icecream on the counter."

var sOne   = (prose[0] === 'W');

var sTwo   = (prose.length === 19);

var sThree = (prose.split(' ').toString() === ["Where", "are", "we", "going?"].toString());

var sFour  = (prose + fact === "Where are we going?I left my icecream on the counter.");

var sFive  = (prose.concat('yoooooo ').trim() === "Where are we going?yoooooo");

var sSix   = (fact.toUpperCase() === "I LEFT MY ICECREAM ON THE COUNTER.");

console.log('---------------------------')
console.log('Question 1: ' + sOne);
console.log('Question 2: ' + sTwo);
console.log('Question 3: ' + sThree);
console.log('Question 4: ' + sFour);
console.log('Question 5: ' + sFive);
console.log('Question 6: ' + sSix);



//FINAL ASSIGNMENT

var questions = (18);
for (var index=0; index < questions; index++) {
   console.log("I have answered" + questions );
}
