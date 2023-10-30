"use strict";

// OBJECT
const delano = {
  namaDepan: "Delano",
  namaBelakang: "Ramadhan",
  tahunLahir: 2006,
  temanKu: ["Fakhri", "Kebab", "Pael"],
};

console.log(delano);

// Mengambil salah satu properti data pada object
//Notasi Titik
console.log(delano.namaDepan);
console.log(delano.temanKu[0]);

//Notasi kurung
console.log(delano["namaBelakang"]);
console.log(delano["temanKu"][1]);

// Menambah properti data pada object
//Notasi Titik

delano.domisili = "Indonesia";

//Notasi Kurung
delano["makananFavorit"] = ["Rendang", "Nasi Goreng", "Steak Daging"];
console.log(delano["makananFavorit"]);

// METHOD OBJECT

// Function di dalam object menggunakan parameter

delano["hitungUmur1"] = function (tahunLahir) {
  return 2023 - tahunLahir;
};

console.log(delano);
const umurSekarang = delano.hitungUmur1(delano.tahunLahir);
console.log(
  `Umur ${delano.namaDepan} saat ini adalah ${umurSekarang} tahun. (object dengan parameter)`
);

// Function di dalam object tanpa parameter
delano.hitungUmur2 = function () {
  return 2023 - this.tahunLahir; //this sama saja seperti delano.tahunLahir
};

const umurSekarang2 = delano.hitungUmur2();
console.log(
  `Umur ${delano.namaDepan} saat ini adalah ${umurSekarang2} tahun. (object tanpa parameter)`
);
