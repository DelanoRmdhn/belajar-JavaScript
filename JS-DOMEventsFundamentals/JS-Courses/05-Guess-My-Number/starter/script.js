'use strict';

// DOM Manipulation untuk check
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

//simpan data diluar DOM
let secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;
let userScore = 20;
let userHighScore = 0;

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
    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }

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
  //reset input number
  guess.value = '';

  //reset styling
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
