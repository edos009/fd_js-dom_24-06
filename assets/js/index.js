/*
DOM - Document Object Modul - это интерфейс которой позволяем 
из скрипта управлять интерфейсом HTML страницы.
*/

"use strict";

const ul = document.querySelector("ul");
const li = document.querySelector("li:nth-child(4)");
const h2 = document.getElementsByTagName("h2");
const img = document.querySelector("[alt=sea]");
const [,p] = document.getElementsByClassName("text");

console.log(ul);
console.log(li);
console.log(h2);
console.log(img);
console.log(p);

const btnHandler = () => {};
