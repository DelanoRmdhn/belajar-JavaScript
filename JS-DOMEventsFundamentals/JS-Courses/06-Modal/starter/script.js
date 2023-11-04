'use strict';

// DEKLARASI VARIABEL CLASS
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', function () {
    console.log('adakah perubahan?');
  });
}
