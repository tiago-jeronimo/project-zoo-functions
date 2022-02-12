const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const object = {};
    data.species.forEach((element) => { object[element.name] = element.residents.length; });
    return object;
  }
  if (Object.values(animal).length === 1) {
    const nameAnimal = Object.values(animal);
    const buscaObjeto = data.species.find((element) => element.name === nameAnimal[0]);
    return buscaObjeto.residents.length;
  }
  if (Object.values(animal).length === 2) {
    const nameAnimal = Object.values(animal);
    const buscaObjeto = data.species.find((element) => element.name === nameAnimal[0]);
    const filtroSex = buscaObjeto.residents.filter((element) => element.sex === animal.sex);
    return filtroSex.length;
  }
}

module.exports = countAnimals;
