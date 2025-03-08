let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

tombol.addEventListener("click", cekKhodam);

function cekKhodam() {
  nama.innerHTML = input.value;
  let angkaRandom = Math.floor(Math.random() * namaKhodam.length);
  hasil.innerHTML = `${namaKhodam[angkaRandom]}`;
}

const namaKhodam = [
  "ular rakus",
  "tikus kantor",
  "dewa Koding",
  "tikus sawah",
  "sapi terbang",
  "pemalas",
  "pengangguran",
  "dewa judol",
  "mas ambatukam",
  "msbrewwc",
  "gunderuwo",
  "pocong terbang",
  "kunti melayang",
  "tukang makan",
  "beban keluarga",
  "beban masyarakat",
  "suka ngutang",
];
