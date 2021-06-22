var tabel = document.getElementById("tabel"),
  nim = document.getElementById("nim"),
  nama = document.getElementById("nama"),
  prodi = document.getElementById("prodi"),
  btnDaftar = document.getElementById("btnDaftar"),
  form = document.getElementById("form1"),
  pesan = document.getElementById("pesan"),
  email = document.getElementById("email"),
  db;

function tampilkanData(e) {
  if (tabel.rows.namedItem(nim.value)) {
    alert("NIM yang anda input telah terdaftar");
    e.preventDefault();
    return;
  }

  var baris = tabel.insertRow();
  baris.id = nim.value;

  baris.insertCell().appendChild(document.createTextNode(nama.value));
  baris.insertCell().appendChild(document.createTextNode(nim.value));
  baris.insertCell().appendChild(document.createTextNode(prodi.value));
  baris.insertCell().appendChild(document.createTextNode(email.value));

  var btnHapus = document.createElement("input");
  btnHapus.type = "button";
  btnHapus.value = "Hapus";
  btnHapus.id = nim.value;
  baris.insertCell().appendChild(btnHapus);

  e.preventDefault();
}

function hapusData(e) {
  if (e.target.type == "button") {
    tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
  }
}
function Kembali() {
  history.go(-1);
}
function Hapus() {
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("prodi").value = "";
  document.getElementById("email").value = "";
}
form.addEventListener("submit", tampilkanData, false);
tabel.addEventListener("click", hapusData, true);