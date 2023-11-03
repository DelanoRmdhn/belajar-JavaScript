'use strict';

// DOM Manipulation untuk check
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');

check.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  console.log(guessValue);

  if (!guessValue) {
    message.textContent = '⛔ No number inputted!';
  }
});
