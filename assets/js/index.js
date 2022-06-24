/*
DOM - Document Object Modul - это интерфейс которой позволяем 
из скрипта управлять интерфейсом HTML страницы.
*/

'use strict';

const btnHandler = () => {
  console.log('Button is clicked');
}

// const [btn] = document.getElementsByTagName('button');
// const btn = document.getElementById('btn');
const btn = document.querySelector('.btn + .btn');
btn.addEventListener('click', btnHandler);

const btns1 = document.getElementsByClassName('btn');
const btns2 = document.querySelectorAll('.btn');
