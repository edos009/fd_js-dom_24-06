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

//Example 2
// fetch("./assets/js/data.json")
//   .then((response) => response.json())
//   .then((data) => console.table(data))
//   .catch((error) => console.log(error)) //для отловки ошибок
//   .finally(()=> console.log('finally')); //не зависимо от результата вернет файнали

fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.map((item) => item.type).join(", "));
  });
