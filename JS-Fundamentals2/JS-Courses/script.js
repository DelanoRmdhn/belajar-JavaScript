"use strict";

//FOR LOOP
let x = 1;
for (x; x <= 10; x++) {
  console.log(`Perulangan ke- ${x}`);
}

const arrayDelano = [
  "Delano",
  "Ramadhan",
  2023 - 2006,
  "Web Developer",
  ["ilham", "kurniawan", "edi"],
];

const arrayKosongan = [];

for (let i = 0; i <= arrayDelano.length; i++) {
  //menampilkan properti data arrayDelano
  console.log(arrayDelano[i]);

  //menambahkan properti data arrayKosongan dari properti data arrayDelano
  arrayKosongan.push(arrayDelano[i]);
}

const tahunLahir = [1976, 1981, 2006, 2009, 2017];
const umur = [];

for (let i = 0; i < tahunLahir.length; i++) {
  const hitungUmur = 2023 - tahunLahir[i];

  umur.push(hitungUmur);
}
console.log(umur);

//BREAK DAN CONTINUE

//continue
for (let i = 0; i <= arrayDelano.length; i++) {
  if (typeof arrayDelano[i] !== "number") continue;
  console.log(arrayDelano[i]);
}

//break
for (let i = 0; i <= arrayDelano.length; i++) {
  if (typeof arrayDelano[i] === "number") break;
  console.log(arrayDelano[i]);
}

//Loop backwards
for (let i = arrayDelano.length - 1; i >= 0; i--) {
  console.log(`properti array indeks ke-${i} : ${arrayDelano[i]}`);
}

//Loop inside a Loop
for (let set = 1; set < 4; set++) {
  console.log(`Set ke-${set}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Set ke-${set} : Push Up repetisi ke-${rep}`);
  }
}
