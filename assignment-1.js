var readlineSync = require("readline-sync");

console.log("Greetings!");
console.log("I am Rahul Yadav and you are?");
var userInput = readlineSync.question();
console.log("Glad to meet you, " + userInput.toUpperCase() + ".");
console.log(".....");
console.log("let's play a game! How much you know me this is the game!!");
console.log("are you ready? (yes/no)");
readlineSync.question();
console.log(".....");
var score = 0;

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("you are right!");
    score = score +1;
  } else {
    console.log("you are wrong!");
    console.log("correct answer is "+ answer.toUpperCase())
  }
  console.log("score: " + score);
  console.log(".....");
}

quiz("What is my favourite color? ", "blue");
quiz("What is my favourite sweet? ", "rasmalai");
quiz("What is my all time favourite movie? ", "rockstar");
quiz("which movie genre I like most? ", "scifi");
quiz("where is my hometown (district)? ", "hoshangabad");
console.log("See you later. Goodbye.");