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
