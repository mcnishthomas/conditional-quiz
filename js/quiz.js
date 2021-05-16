/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank = '';

// 3. Select the <main> HTML element
let main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let answer1 = prompt('What is the name of the Queen of England?').toUpperCase();
if (answer1 === 'Elizabeth'.toUpperCase()) {
  correctAnswers += 1;
}

let answer2 = prompt('What year did the USA get its independence?');
if (answer2 == 1776) {
  correctAnswers += 1;
}

let answer3 = prompt('What is the legal drinking age in Germany?');
if (answer3 == 16) {
  correctAnswers += 1;
}

let answer4 = prompt('What is the capital of India?').toUpperCase();
if (answer4 === 'New Delhi'.toUpperCase()) {
  correctAnswers += 1;
}

let answer5 = prompt('When does the narwhal bacon?').toUpperCase();
if (answer5 === 'midnight'.toUpperCase()) {
  correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers == 5) {
  playerRank = 'a Golden Crown 👑';
} else if (correctAnswers >= 3) {
  playerRank = 'a Silver Crown';
} else if (correctAnswers >= 2) {
  playerRank = 'a Bronze Crown';
} else {
  playerRank = 'NOTHING! GOOD DAY, SIR!'
}

// 6. Output results to the <main> element
main.innerHTML = `<h2>You got ${correctAnswers} correct answers!</h2> <h1>You get ${playerRank} </h1> `;
