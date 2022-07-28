const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especieBuscada = data.species.find((e) => e.name === animal);
  return especieBuscada.residents.every((e) => e.age >= age);
}

module.exports = getAnimalsOlderThan;
