'use strict'

// const btn = document.getElementById('btn');

// btn.addEventListener('click', btnHandler);

// function btnHandler(){

// }


// console.log(1);
// setTimeout(() => {
//   console.log(3);
// }, 1500);
// console.log(2);

const identificator = setTimeout(() => {
  console.log(3);
}, 500);

clearTimeout(identificator);