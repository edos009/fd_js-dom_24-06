"use strict";

function createCounter(initial) {
  let i = initial; //closure
  return {
    increment() {
      return ++i;
    },
    decrement() {
      return --i;
    },
  };
}

const counter1 = createCounter(30);
counter1.increment();
counter1.increment();
counter1.increment;
console.log(counter1.increment());

const counter2 = createCounter(100);
console.log(counter2.decrement());
