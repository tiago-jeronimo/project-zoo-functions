const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const days = Object.keys(hours);
const hora = Object.values(hours);

function daysAnimal(param) {
  const animal = data.species;
  const retorno = animal.find((element) => element.name === param).availability;
  return retorno;
}

// function dispon() {
//   const funcionamento = {};
//   for(let index = 0; index < days.length; index +=1) {
//     funcionamento[days[index]] = {
//       officeHour: `Open from ${hora[index].open}am until ${hora[index].close}pm`,
//       exhibition: species.filter((elemento) => elemento.availability.includes(days[index]))
//       .map((elem) => elem.name),
//     }
//   }
//   funcionamento.Monday = {
//     officeHour: 'CLOSED',
//     exhibition: 'The zoo will be closed!',
//   };
//   return funcionamento;

function availability() {
  const funcionamento = {};
  for (let i = 0; i < days.length; i += 1) {
    funcionamento[days[i]] = {
      officeHour: `Open from ${hora[i].open}am until ${hora[i].close}pm`,
      exhibition: species.filter((elements) =>
        elements.availability.includes(days[i]))
        .map((elemento) => elemento.name),
    };
  }
  funcionamento.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return funcionamento;
}

function returnDay(day) {
  const diaParaValiar = availability();
  const objDestruc = { [day]: diaParaValiar[day] };
  return objDestruc;
}

function getSchedule(scheduleTarget) {
  const daysValid = Object.keys(data.hours).includes(scheduleTarget);
  const animalValid = data.species.some((element) => element.name === scheduleTarget);
  if (daysValid) {
    return returnDay(scheduleTarget);
  }
  if (animalValid) {
    return daysAnimal(scheduleTarget);
  }
  return availability();
}
module.exports = getSchedule;
