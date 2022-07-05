"use strict";

const user = {
  fname: 'Elon',
  age: 51,
  getName(){
    return this.fname
  },
  isWife: true,
  children: ['ch1', 'ch2'],
  adress: {
    country: 'USA',
    town: 'NY'
  },
  ukrPassport: null,
  petty: undefined,
  [Symbol('prop symbol')]: 'prop symbol'
};

const serializationUser = JSON.stringify(user);
console.log(serializationUser);

const deserializationUser = JSON.parse(serializationUser);
console.log(deserializationUser);
