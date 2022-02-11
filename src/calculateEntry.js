const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const priceChild = parseInt(people.child, 0) * 20.99;
  const priceAdult = parseInt(people.adult, 0) * 49.99;
  const priceSenior = parseInt(people.senior, 0) * 24.99;
  const priceTotal = priceChild + priceAdult + priceSenior;
  return priceTotal;
}

module.exports = { calculateEntry, countEntrants };
