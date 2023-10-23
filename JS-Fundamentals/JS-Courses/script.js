//SWITCH CASE
let condition = true;
while (condition) {
  const inputHari = prompt("Masukkan hari untuk mengetahui Jobdesk Anda : ");

  if (inputHari === null) {
    alert("SELESAI");
    break; // Hentikan loop jika pengguna membatalkan prompt
  }

  switch (inputHari) {
    case "senin":
      console.log("Jobdesk Senin");
      console.log("Mengajar Lowell");
      console.log("Mempelajari Javascript");
      break;
    case "selasa":
      console.log("Jobdesk Selasa");
      console.log("Mempelajari Servo di Gundar");
      console.log("Menyiapkan bahan pengajaran besok");
      break;
    case "rabu":
      console.log("Jobdesk Rabu");
      console.log("Mengajar di Tunas Metropolitan");
      console.log("Belajar Javascript");
      break;
    case "kamis":
    case "jumaat":
      console.log("Jobdesk Kamis dan Jumaat");
      console.log("Mengajar Lowell");
      console.log("Mempelajari Javascript");
      break;
    case "sabtu":
    case "minggu":
      console.log("Jobdesk Sabtu dan Minggu");
      console.log("VALHEIM AMPE BEGO!");
      break;
    default:
      prompt("Hari Tidak Tersedia");
  }

  alert("Anda ingin melihat hari lainnya?");
}
