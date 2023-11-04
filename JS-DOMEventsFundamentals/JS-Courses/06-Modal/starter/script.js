'use strict';

// DEKLARASI VARIABEL CLASS
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openModal);
}

// CLOSE MODAL EVENT
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//KEYBOARD ESC EVENT
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key;

  if (keyPressed === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Escpae key pressed');
    closeModal();
  }
});
