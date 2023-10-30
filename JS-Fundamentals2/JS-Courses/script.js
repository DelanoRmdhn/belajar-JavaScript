"use strict";

// OBJECT
const delano = {
  namaDepan: "Delano",
  namaBelakang: "Ramadhan",
  umur: 2023 - 2006,
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

// BONUS
//Delano mempunyai 3 makanan kesukaan, dan makanan favoritnya adalah steak daging.
//ubah Delano,3 makanan kesukaan,dan steak daging menjadi dinamis!\

const kalimatDenganNotasiKurung = `${delano["namaDepan"]} mempunyai ${delano["makananFavorit"].length} makanan kesukaan, dan makanan favoritnya adalah ${delano["makananFavorit"][2]}`;

const kalimatDenganNotasiTitik = `${delano.namaDepan} mempunyai ${delano.makananFavorit.length} makanan kesukaan, dan makanan favoritnya adalah ${delano.makananFavorit[2]}`;

console.log(kalimatDenganNotasiKurung);
console.log(kalimatDenganNotasiTitik);
