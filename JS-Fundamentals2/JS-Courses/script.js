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

// Deklarasi Function VS Ekspresi

/// Function Deklarasi
function hitungUmur1(tahunLahir) {
  return 2023 - tahunLahir;
}

const umur1 = hitungUmur1(2006);

/// Function Ekspresi
const hitungUmur2 = function (tahunLahir) {
  return 2023 - tahunLahir;
};

const umur2 = hitungUmur2(2006);

console.log(umur1, umur2);

// Arrow Function
const sisaTahun = (umur) => 65 - umur;
console.log(sisaTahun(17));

//bentuk lain
const sisaTahun2 = (tahunLahir, nama) => {
  const umur = 2023 - tahunLahir;
  const waktuPensiun = 65 - umur;
  return `${nama} akan pensiun dalam ${waktuPensiun} tahun`;
};

console.log(sisaTahun2(2006, "Budi"));

// Function di dalam Function

// STUDI KASUS 1
function umurSaya(tahunLahir) {
  return 2023 - tahunLahir;
}

function waktuPensiun(tahunLahir) {
  const umur = umurSaya(tahunLahir);
  const sisaWaktuPensiun = 65 - umur;
  return `Sisa Tahun sebelum anda pensiun adalah ${sisaWaktuPensiun} tahun`;
}

console.log(waktuPensiun(2006));

// STUDI KASUS 2
function potongKecil(potongan) {
  return potongan * 4;
}

function buah(apel, plum) {
  console.log(`total buah ada ${apel} apel dan ${plum} plum`);
  const potongApel = potongKecil(apel);
  const potongPlum = potongKecil(plum);
  const setelahDiPotong = `setelah di potong ada ${potongApel} buah potongan apel dan ${potongPlum} buah potongan plum`;
  return setelahDiPotong;
}

console.log(buah(5, 2));
