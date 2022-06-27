"use strict";

function createCounter(initial) {
  let i = initial; //closure
  return function counter() {
    i++;
    return i;
  };
}

const counter1 = createCounter(30);
counter1();
counter1();
counter1();
console.log(counter1());

const counter2 = createCounter(100);
console.log(counter2());

