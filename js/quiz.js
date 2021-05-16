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

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/




// 6. Output results to the <main> element
main.innerHTML = `<h3>You got ${correctAnswers} correct answers!</h3> <h2>You get a ${}</h2>`;
