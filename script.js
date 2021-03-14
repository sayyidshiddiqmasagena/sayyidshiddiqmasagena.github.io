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
