"use strict"

let btn = document.querySelector('.button');
let text = '';
let arr = [];
btn.addEventListener("mousedown", () => {
text = prompt('Введите текст более трех слов');
if (text) {

let strSplit = text.split(" ");

let textSplit = strSplit.sort(function(a, b) {
    return b.length - a.length;
  });
  alert(`${textSplit[0]}; ${textSplit[1]}; ${textSplit[2]}`)
};
});