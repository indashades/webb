"use strict";

let hpv = document.querySelector("hpv");
let hph = document.querySelector("hph");
let hpvjs = 100;
let hphjs = 100;
let skadav = 10;
let skadah = 10;
let hastighetv = 10;
let hastigheth = 10;
let turn = 1;
let c = 0;

uppdateraHP();

//knappar
const v = document.getElementById("v");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
const v4 = document.getElementById("v4");
const v5 = document.getElementById("v5");
const h = document.getElementById("h");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");

if (turn == 1) {
  v.addEventListener("click", function (e) {
    hphjs = hphjs - skadav;
    uppdateraHP();
  });
  turn = 2;
}
if (turn == 2) {
  h.addEventListener("click", function (e) {
    hpvjs = hpvjs - skadah;
    uppdateraHP();
  });
  turn = 2;
}

alert("du har 5000.000.000 virus");

console.log(v);
console.log("ska förändras?");

function uppdateraHP() {
  document.getElementById("hpv").innerHTML = hpvjs;
  document.getElementById("hph").innerHTML = hphjs;
}
