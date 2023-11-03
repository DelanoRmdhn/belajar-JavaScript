'use strict';

// DOM Manipulation untuk check
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const body = document.querySelector('body');

//simpan data diluar DOM
let secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;

let userScore = 20;

check.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  console.log(guessValue);

  //kondisi user tidak menginput angka
  if (!guessValue) {
    message.textContent = '⛔ No number inputted!';
  }
  //kondisi ketika user benar
  else if (guessValue === secretNumber) {
    message.textContent = '🎉 Correct Number!';

    //styling
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guessValue > secretNumber) {
    if (userScore > 1) {
      message.textContent = '📈 To high!';
      userScore--;
      score.textContent = userScore;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
    }
  } else if (guessValue < secretNumber) {
    if (userScore > 1) {
      message.textContent = '📈 To low!';
      userScore--;
      score.textContent = userScore;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0;
    }
  }
});

/* 
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/

const again = document.querySelector('.again');

// handler restart game
again.addEventListener('click', function () {
  //reset message
  message.textContent = 'Start guessing...';
  //reset randomNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  number.textContent = secretNumber;
  //reset score
  userScore = 20;
  score.textContent = userScore;

  //reset styling
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
