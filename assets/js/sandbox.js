"use strict";

//Области видимости
/*
1. Глобальная;
2. Локальная;
3. Блочная;
*/

// Замыкание - это комбинация функции и лексического окружения в котором эта функция была создана.
// Лексическое окружение - все переменные доступные функция.

let value = 10;

function log() {
  console.log("function log", value); // 10;
}

function wrapper() {
  let value = 20;
  console.log("function wrapper", value); // 20

  log();
}

wrapper();

console.log('after', value); // 10
