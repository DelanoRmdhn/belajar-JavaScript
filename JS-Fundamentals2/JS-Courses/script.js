"use strict";

// FUNCTION
function panggil() {
  console.log("Halo adik adik");
}

panggil();
panggil();
panggil();

function kandunganJus(apel, jeruk) {
  const bahanJus = `Jus ini memiliki ${apel} apel dan ${jeruk} jeruk`;
  return bahanJus; //statement return mengembalikan ekspresi bahan jus.
}

kandunganJus(3, 4); //3 dan 4 adalah parameter dari function kandunganJus

const jus = kandunganJus(3, 4); //untuk mengembalikan ekspresi bahan jus kita harus masukan kedalam variable
console.log(jus); //menampilkan ekspresi bahan jus yang telah di kembalikan

//menggunakan 1 function berkali kali
const jusApelJeruk = kandunganJus(1, 4);
console.log(jusApelJeruk);

// dengan membuat variabel baru (jusApelJeruk) kita bisa memanggil function kandunganJus dan menggunakan function tersebut.
