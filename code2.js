"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const rand = Math.random();
    const randomIndex = Math.trunc(rand * (stringSet.length - 1));
    result += stringSet[randomIndex];
  }
  return result;
}

let nickName = "";
let userId = "";
let pasword = "";

const nickname = document.querySelector("#nickname");
const id = document.querySelector("#id");
const pass = document.querySelector("#pass");
const in0 = document.querySelector("#in0");
const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const btnLoad = document.querySelector("#btn1");

btnLoad.addEventListener("click", (e) => {
  const inn0 = in0.value;
  const inn1 = in1.value;
  const inn2 = in2.value;
  if (inn0 > 25 || inn0 < 0) {
    alert("Nick Name không quá 25 kt !! 😥");
  } else if (inn1 > 50 || inn1 < 0) {
    alert("ID không quá 50 kt !! 😪");
  } else if (inn2 > 100 || inn2 < 0) {
    alert("Password không quá 100 kt !! 😥");
  } else {
    nickName =
      inn0 != ""
        ? RandomString(letters, 1) +
          RandomString(letters + upercaseLetters + numbers, inn0 - 1)
        : "";
    userId =
      inn1 != ""
        ? RandomString(letters, 1) +
          RandomString(letters + numbers, inn1 - 1) +
          "@gmail.com"
        : "";
    pasword =
      inn2 != ""
        ? RandomString(letters + upercaseLetters + numbers + specialChars, inn2)
        : "";
    in0.value = inn0;
    in1.value = inn1;
    in2.value = inn2;

    nickname.textContent = nickName;
    id.textContent = userId;
    pass.textContent = pasword;
  }
});
