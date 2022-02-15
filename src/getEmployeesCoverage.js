const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const saida = employees.map((elemento) => {
  const empregado = {
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: species.filter((specie) => elemento.responsibleFor.includes(specie.id))
      .map((nome) => nome.name),
    locations: species.filter((specie) => elemento.responsibleFor.includes(specie.id))
      .map((nome) => nome.location),
  };
  return empregado;
});
function checkEmployees(name, input) {
  let recebe = false;
  employees.forEach((element) => {
    const { firstName, lastName, id } = element;
    if (firstName === name || lastName === name || id === input) {
      recebe = true;
    }
  });
  return recebe;
}

function getEmployeesCoverage(param) {
  if (!param) {
    return saida;
  }
  const { name, id } = param;
  if (!checkEmployees(name, id)) {
    throw new Error('Informações inválidas');
  }
  if (Object.keys(param).includes('id')) {
    const saidaRequisito = saida.find((element) => element.id.includes(param.id));
    return saidaRequisito;
  }
  // if (Object.keys(param).includes('name')) {
  return saida.find((element) => element.fullName.includes(param.name));
}
module.exports = getEmployeesCoverage;
