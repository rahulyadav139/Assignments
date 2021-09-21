var readlineSync = require("readline-sync");

console.log("Enter your name.....");
var userName = readlineSync.question();
console.log("Welcome " + userName.toUpperCase());
console.log(".....");
console.log("Test your basic general knowledge with quiz! This quiz contains 10 questions with three toughness level (Easy, Medium and Hard). Markinng scheme as follows:");

console.log("Level: Easy, Questions: 4, Award for correct answer: 2");

console.log("Level: Medium, Questions: 4, Award for correct answer: 3");

console.log("Level: Hard, Questions: 2, Award for correct answer: 5");

console.log(".....");
console.log("**PENALTY FOR EVERY INCORRECT ANSWER IS ONE THIRD OF THE AWARDING MARKS**")
console.log(".....");
console.log("are you ready? (yes/no)")
var input = readlineSync.question();
if (input === "no") {
  console.log("Thank you " + userName.toUpperCase());
  console.log(".....");
} else {
  if (input === "yes") {
  console.log(".....");
  var question1 = {
  question: "How many states are in India?",
  optionA: "a. 27",
  optionB: "b. 25",
  optionC: "c. 28",
  optionD: "d. 29",
  award: 2,
  answer: "d",
  level: "Easy",
  }
  var question2 = {
  question: "What is the capital of India?",
  optionA: "a. Mumbai",
  optionB: "b. Delhi",
  optionC: "c. Kolkata",
  optionD: "d. Chennai",
  award: 2,
  answer: "b",
  level: "Easy",
  }
  var question3 = {
  question: "What is the national animal of India?",
  optionA: "a. Cheetah",
  optionB: "b. Lion",
  optionC: "c. Tiger",
  optionD: "d. Panther",
  award: 2,
  answer: "c",
  level: "Easy",
  }
  var question4 = {
  question: "When India got freedom?",
  optionA: "a. 1947",
  optionB: "b. 1948",
  optionC: "c. 1949",
  optionD: "d. 1950",
  award: 2,
  answer: "a",
  level: "Easy",
  }
  var question5 = {
  question: "What is the origin of river Ganga?",
  optionA: "a. Chhota Shigri Glacier",
  optionB: "b. Sonapani Glacier",
  optionC: "c. Rakhiot Glacier",
  optionD: "d. Gangotri Glacier",
  award: 3,
  answer: "d",
  level: "Medium",
  }
  var question6 = {
  question: "Which planet in our solar system is known as the Red Planet?",
  optionA: "a. Mercury",
  optionB: "b. Venus",
  optionC: "c. Mars",
  optionD: "d. Earth",
  award: 3,
  answer: "c",
  level: "Medium",
  }
  var question7 = {
  question: "Who invented the Telephone?",
  optionA: "a. Alexander Graham Bell",
  optionB: "b. Thomas Alva Edison",
  optionC: "c. Alexander Fleming",
  optionD: "d. Johannes Gutenberg",
  award: 3,
  answer: "a",
  level: "Medium",
  }
  var question8 = {
  question: "What is the name of the largest moon of Saturn?",
  optionA: "a. Mimas",
  optionB: "b. Titan",
  optionC: "c. Tethys",
  optionD: "d. Dione",
  award: 3,
  answer: "b",
  level: "Medium",
  }
  var question9 = {
  question: "Indus Valley Civilization was discovered by:",
  optionA: "a. Dayaram Sahni",
  optionB: "b. R.D. Banerji",
  optionC: "c. Cunningham",
  optionD: "d. Wheeler",
  award: 5,
  answer: "a",
  level: "Hard",
  }
  var question10 = {
  question: "What is the largest single bone in the human body?",
  optionA: "a. Tarsus",
  optionB: "b. Sternum",
  optionC: "c. Femur",
  optionD: "d. Humerus",
  award: 5,
  answer: "c",
  level: "Hard",
  }
 var quiz = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

 var score =0;

 for (i=0; i<quiz.length; i++) {
  var showQuestion = quiz[i];
  console.log("Level: " + showQuestion.level);
  console.log()
  console.log(i+1 + ". " + showQuestion.question);
  console.log()
  console.log(showQuestion.optionA);
  console.log(showQuestion.optionB);
  console.log(showQuestion.optionC);
  console.log(showQuestion.optionD);
  var userAnswer = readlineSync.question();
  if (userAnswer === showQuestion.answer) {
    console.log("Correct!")
    var score = score + showQuestion.award;
    var showScore = score.toFixed(2);
    console.log("Score: " + showScore);
    console.log(".....");
  } else {
    console.log("Wrong!")
    console.log("Correct answer: " + showQuestion.answer)
    var score = score - (showQuestion.award / 3);
    var showScore = score.toFixed(2);
    console.log("Score: " + showScore);
    console.log(".....");
  }
 }
 console.log("Great! You have completed the quiz.");
 if (score.toFixed(0) === "30") {
   console.log("Yayyyy!! You get perfect score. 30 out of 30. CONGRATULATIONS.")
 } else {console.log("Your score is " + showScore + " out of 30.");
 }
 } else {
  console.log("Incorrect entry");
 }
}