const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaborador = data.employees.find((e) => e.id === id);
  const primeiraEspecie = colaborador.responsibleFor[0];
  const animal = data.species.filter((e) => e.id === primeiraEspecie).map((e) => e.residents)[0];
  const lista = [];
  animal.forEach((e) => {
    if (lista.length === 0) {
      lista.push(e.name, e.sex, e.age);
    }
    if (e.age > lista[2]) {
      lista.push(e.name, e.sex, e.age);
      lista.splice(0, 3);
    }
  });
  return lista;
}

module.exports = getOldestFromFirstSpecies;
