"use strict";

// const user = {
//   fname: "Elon",
//   age: 51,
//   getName() {
//     return this.fname;
//   },
//   isWife: true,
//   children: ["ch1", "ch2"],
//   address: {
//     country: "USA",
//     town: "NY",
//   },
//   ukrPassport: null,
//   petty: undefined,
//   [Symbol("prop symbol")]: "prop symbol",
// };

// const serializationUser = JSON.stringify(user);
// console.log(serializationUser);

// const deserializationUser = JSON.parse(serializationUser);
// console.log(deserializationUser);

const animal = {
  type: "cat",
  age: 10,
  isMustache: true,
  children: ["kitty1, kitty2"],
  color: null,
  countLives: undefined,
};

console.log(animal);
const serializationAnimal = JSON.stringify(animal);
console.log(serializationAnimal);

const deserializationAnimal = JSON.parse(serializationAnimal);
console.log(deserializationAnimal);
