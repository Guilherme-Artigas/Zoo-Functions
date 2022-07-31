const data = require('../data/zoo_data');

const fullName = (name, id) => {
  const colaborador = data.employees.find((e) => e.firstName === name
  || e.lastName === name || e.id === id);
  if (colaborador === undefined) {
    throw new Error('Informações inválidas');
  }
  return colaborador;
};

const buscaLocalizacao = (array) => {
  const listaLocalizacao = [];
  data.species.forEach((e) => {
    if (array.includes(e.name) || array.includes(e.id)) {
      listaLocalizacao.push(e.location);
    }
  });
  return listaLocalizacao;
};

const buscaEspecies = (array) => {
  const listaAnimais = [];
  data.species.forEach((e) => {
    if (array.includes(e.id)) {
      listaAnimais.push(e.name);
    }
  });
  return listaAnimais;
};

const colaboradores = () => data.employees.map((e) => ({
  id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: buscaEspecies(e.responsibleFor),
  locations: buscaLocalizacao(e.responsibleFor),
}));

function getEmployeesCoverage(obj) {
  if (obj === undefined) return colaboradores();
  const nomeCompleto = fullName(obj.name, obj.id);
  const especies = buscaEspecies(nomeCompleto.responsibleFor);
  const localizacao = buscaLocalizacao(especies);
  return {
    id: nomeCompleto.id,
    fullName: `${nomeCompleto.firstName} ${nomeCompleto.lastName}`,
    species: especies,
    locations: localizacao,
  };
}

module.exports = getEmployeesCoverage;
