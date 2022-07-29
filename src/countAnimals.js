const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allSpecies = data.species.reduce((acc, cur) => {
    const key = cur.name;
    if (!acc[key]) {
      acc[key] = cur.residents.length;
    }
    return acc;
  }, {});
  if (animal === undefined) return allSpecies;
  const qntChaves = Object.keys(animal);
  const specie = data.species.find((e) => e.name === animal.specie);
  if (qntChaves.length === 1) return specie.residents.length;
  const sexo = specie.residents.filter((e) => e.sex === animal.sex);
  if (qntChaves.length === 2) return sexo.length;
}

module.exports = countAnimals;
