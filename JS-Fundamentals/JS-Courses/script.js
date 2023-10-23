//LOGICAL OPERATOR
/* 
AND &&
OR ||
NOT !
*/

const belajarJavascript = true; //VAR A
const durasiBelajar = 5; //VAR B

if (belajarJavascript && durasiBelajar >= 4) {
  console.log("Anda Boleh Bermain Valheim!");
} else {
  console.log("Anda Tidak Boleh Bermain Valheim!");
}

/* 
ketika kondisi belajarJavascript bernilai true dan durasi belajar lebih dari 4 maka akan menampilkan "Anda Boleh Bermain Valheim!"
*/

const apakahLelah = false;
if (belajarJavascript && durasiBelajar >= 4 && !apakahLelah) {
  console.log("Anda Boleh Bermain Valheim!");
} else {
  console.log("Anda Tidak Boleh Bermain Valheim!");
}

/* 
ketika kondisi belajarJavascript bernilai true dan durasi belajar lebih dari 4 dan apakahLelah bernilai NOT false maka akan menampilkan "Anda Boleh Bermain Valheim!"
*/
