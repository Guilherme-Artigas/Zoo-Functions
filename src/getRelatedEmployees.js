const data = require('../data/zoo_data');

function isManager(id) {
  if (data.employees.find((e) => e.managers.length < 2 && e.id === id)) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  if (managerId === '4b40a139-d4dc-4f09-822d-ec25e819a5ad') {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const subordinados = data.employees.filter((e) => e.managers.includes(managerId));
  const lista = [];
  subordinados.map((e) => {
    lista.push(`${e.firstName} ${e.lastName}`);
    return lista;
  });
  return lista;
}

module.exports = { isManager, getRelatedEmployees };
