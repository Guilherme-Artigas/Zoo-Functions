const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return ids.map((animalBuscado) => data.species.find((e) => e.id === animalBuscado));
}

module.exports = getSpeciesByIds;
