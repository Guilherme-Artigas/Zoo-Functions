const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const funcionario = data.employees.find((e) => e.firstName === employeeName
  || e.lastName === employeeName);
  return funcionario;
}

module.exports = getEmployeeByName;
