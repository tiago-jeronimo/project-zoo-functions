const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const verificationAnimal = species.find((element) => element.name === animal);
  const { residents } = verificationAnimal;
  return residents.every((elemento) => elemento.age > age);
}

module.exports = getAnimalsOlderThan;
