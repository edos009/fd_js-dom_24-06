"use strict";

// const animal = {
//   type: "cat",
//   age: 10,
//   isMustache: true,
//   children: ["kitty1, kitty2"],
//   color: null,
//   countLives: undefined,
// };

// console.log(animal);
// const serializationAnimal = JSON.stringify(animal);
// console.log(serializationAnimal);

// const deserializationAnimal = JSON.parse(serializationAnimal);
// console.log(deserializationAnimal);

//Example 1
const promise1 = fetch('./assets/js/data.json');
console.log(promise1);

promise1.then((response) => {
  console.log(response);
  const dataJson = response.json();
  console.log(dataJson);
  dataJson.then((data) => {
    console.log(data);
  })
})

//Example 2
fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => console.table(data));
