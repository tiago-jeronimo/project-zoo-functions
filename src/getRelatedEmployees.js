const data = require('../data/zoo_data');

// isManager é uma função que tem como parametro um 'id', o comportamento da função é ir até a seção employees, depois se o resultado da propriedade managers dessa seção é igual ao id repassado por parâmetro. True se sim, false se não.
function isManager(id) {
  return data.employees.some((elementoEmsi) => elementoEmsi.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((element) => element.managers.includes(managerId)) // retorna um novo array com os dados do gerente
      .map((elements) => `${elements.firstName} ${elements.lastName}`); // o map ira fazer a execução da função para cada elements, nesse caso, irá criar um array com o nome e sobrenome.
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#sum%C3%A1rio
