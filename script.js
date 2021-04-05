$(document).ready(function () {
  fetch();

  function fetch() {
    let url = "https://covid19.mathdro.id/api";

    let data = "";

    $.get(url, function (data) {
      console.log(data.confirmed);
      console.log(data.recovered);
      console.log(data.deaths);

      data = `
          <td>${data.confirmed.value}</td>
          <td>${data.recovered.value}</td>
          <td>${data.deaths.value}</td>

          `;

      $("#data").html(data);
    });
  }

  fetch1();

  function fetch1() {
    let url = "https://covid19.mathdro.id/api/countries/Indonesia";

    let dataindonesia = "";

    $.get(url, function (dataindonesia) {
      console.log(dataindonesia.confirmed);
      console.log(dataindonesia.recovered);
      console.log(dataindonesia.deaths);

      dataindonesia = `
          <td>${dataindonesia.confirmed.value}</td>
          <td>${dataindonesia.recovered.value}</td>
          <td>${dataindonesia.deaths.value}</td>

          `;

      $("#dataindonesia").html(dataindonesia);
    });
  }

  fetch2();

  function fetch2() {
    let url = "https://covid19.mathdro.id/api/countries/Singapore";

    let datasingapore = "";

    $.get(url, function (datasingapore) {
      console.log(datasingapore.confirmed);
      console.log(datasingapore.recovered);
      console.log(datasingapore.deaths);

      datasingapore = `
          <td>${datasingapore.confirmed.value}</td>
          <td>${datasingapore.recovered.value}</td>
          <td>${datasingapore.deaths.value}</td>

          `;

      $("#datasingapore").html(datasingapore);
    });
  }

  fetch3();

  function fetch3() {
    let url = "https://covid19.mathdro.id/api/countries/Malaysia";

    let datamalaysia = "";

    $.get(url, function (datamalaysia) {
      console.log(datamalaysia.confirmed);
      console.log(datamalaysia.recovered);
      console.log(datamalaysia.deaths);

      datamalaysia = `
          <td>${datamalaysia.confirmed.value}</td>
          <td>${datamalaysia.recovered.value}</td>
          <td>${datamalaysia.deaths.value}</td>

          `;

      $("#datamalaysia").html(datamalaysia);
    });
  }

  fetch4();

  function fetch4() {
    let url = "https://covid19.mathdro.id/api/countries/Burma";

    let datamyanmar = "";

    $.get(url, function (datamyanmar) {
      console.log(datamyanmar.confirmed);
      console.log(datamyanmar.recovered);
      console.log(datamyanmar.deaths);

      datamyanmar = `
          <td>${datamyanmar.confirmed.value}</td>
          <td>${datamyanmar.recovered.value}</td>
          <td>${datamyanmar.deaths.value}</td>

          `;

      $("#datamyanmar").html(datamyanmar);
    });
  }
});

function average() {
  A = parseFloat(document.getElementById("firstNum").value);
  B = parseFloat(document.getElementById("secondNum").value);
  C = parseFloat(document.getElementById("thirdNum").value);

  document.getElementById("hasil").innerHTML = (A + B + C) / 3;
}

function highest() {
  A = parseFloat(document.getElementById("firstNum").value);
  B = parseFloat(document.getElementById("secondNum").value);
  C = parseFloat(document.getElementById("thirdNum").value);

  document.getElementById("nilaimax").innerHTML = Math.max(A, B, C);
}

function lowest() {
  A = parseFloat(document.getElementById("firstNum").value);
  B = parseFloat(document.getElementById("secondNum").value);
  C = parseFloat(document.getElementById("thirdNum").value);

  document.getElementById("nilaimin").innerHTML = Math.min(A, B, C);
}

function middle() {
  A = parseFloat(document.getElementById("firstNum").value);
  B = parseFloat(document.getElementById("secondNum").value);
  C = parseFloat(document.getElementById("thirdNum").value);

  var arr = [A, B, C];
  arr.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("nilaitengah").innerHTML = arr[1];
}

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
