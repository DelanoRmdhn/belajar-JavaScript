// VARIABEL DAN NILAI
let userName = "Delano";
console.log(userName);

// DYNAMIC TYPING DAN TYPEOF
let age = 30;
console.log(typeof age);

//contoh dynamic Typing
let firstName = "Delano";
console.log(firstName);

firstName = "ilham";
console.log(firstName);
//kesimpulannya dynamic typing memungkinkan suatu variabel mampu menimpa nilai yang berbeda

//IF ELSE STATEMENT
const tahunSekarang = 2023;
const tahunKelahiran = 2010;
const umurMinimal = 17;

if (tahunSekarang - tahunKelahiran >= umurMinimal) {
  console.log(
    `Umur anda saat ini adalah ${
      tahunSekarang - tahunKelahiran
    }. Maka anda boleh membuat SIM`
  );
} else {
  console.log(
    `Umur anda saat ini adalah ${
      tahunSekarang - tahunKelahiran
    }. Anda baru boleh membuat SIM ${
      umurMinimal - (tahunSekarang - tahunKelahiran)
    } tahun lagi.`
  );
}

// KONVERSI TIPE DATA

// konversi string ke number
const y = "2006";
const hasil = Number(y) + 10;
console.log(hasil);

// konversi number ke string
let umur = 10;
console.log(typeof String(umur)); //konversi ke string

console.log("nama saya delano dan umur saya " + umur + "."); //javascript mengkonversi number ke string secara otomatis
