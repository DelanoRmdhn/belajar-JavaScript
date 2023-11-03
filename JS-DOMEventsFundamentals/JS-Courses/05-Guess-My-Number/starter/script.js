'use strict';

// DOM Manipulation untuk check
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');

//simpan data diluar DOM
const secretNumber = Math.trunc(Math.random() * 20) + 1;
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
