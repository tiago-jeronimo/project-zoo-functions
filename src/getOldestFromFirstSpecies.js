const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const buscaAnimal = data.species.find((element) => element.id === idAnimal);
  let result = buscaAnimal.residents[0];
  buscaAnimal.residents.forEach((elemento) => {
    if (elemento.age > result.age) {
      result = elemento;
    }
  });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
