const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const criancas = entrants.filter((e) => e.age < 18);
  const adultos = entrants.filter((e) => e.age >= 18 && e.age < 50);
  const idosos = entrants.filter((e) => e.age >= 50);
  return {
    child: criancas.length,
    adult: adultos.length,
    senior: idosos.length,
  };
}

function calculateEntry(entrants = 0) {
  const idadeVisitantes = countEntrants(entrants);
  if (countEntrants(entrants) === 0) return 0;
  const { adult, child, senior } = idadeVisitantes;
  return adult * 49.99 + child * 20.99 + senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
