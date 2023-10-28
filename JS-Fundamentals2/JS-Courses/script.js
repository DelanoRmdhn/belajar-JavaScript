"use strict";

//ARRAY
const temanKu = ["Fakhri", "Kebab", "Pael"];
console.log(temanKu);

//penggunaan properti length
console.log(temanKu.length);

//mengubah isi salah sati data pada array
temanKu[2] = "Ilham";
console.log(temanKu);

//membuat array di dalam array
const dataDiri = ["Delano", "Ramadhan", 2023 - 2006, temanKu];
console.log(dataDiri);

//penggunaan function dan array
function calcAge(birthYear) {
  return 2023 - birthYear;
}

const umur = [2000, 1976, 1981, 2006];
const umur1 = calcAge(umur[0]);
const umur2 = calcAge(umur[1]);
const umur3 = calcAge(umur[umur.length - 1]);

console.log(umur1, umur2, umur3);

//menggabungkan array
const semuaUmur = [umur1, umur2, calcAge(umur[umur.length - 1])];
console.log(semuaUmur);
