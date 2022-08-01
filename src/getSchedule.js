const data = require('../data/zoo_data');

const cronograma1 = (animal) => data.species.find((e) => {
  const animalBuscado = e.name === animal;
  return animalBuscado;
});

const listaAnimais = (dia) => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.availability.includes(dia)) {
      lista.push(e.name);
    }
  });
  return lista;
};

const cronograma2 = () => {
  const diasSemana = Object.keys(data.hours);
  const aB = Object.values(data.hours);
  const lista = [];
  diasSemana.forEach((e, i) => {
    if (e !== 'Monday') {
      lista.push({ [e]: {
        officeHour: `Open from ${aB[i].open}am until ${aB[i].close}pm`,
        exhibition: listaAnimais(e),
      } });
    }
    if (e === 'Monday') {
      lista.push({ [e]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      } });
    }
  });
  return lista;
};

const cronograma3 = () => {
  const diasSemana = Object.keys(data.hours);
  const aB = Object.values(data.hours);
  return data.species.reduce((acc, cur, i) => {
    const key = diasSemana[i];
    if (!acc[key] && i < 6) {
      acc[key] = {
        officeHour: `Open from ${aB[i].open}am until ${aB[i].close}pm`,
        exhibition: listaAnimais(key),
      };
    }
    if (!acc[key] && i < 7) {
      acc[key] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } return acc;
  }, {});
};

const d = (dia) => {
  const arrayCronograma = cronograma2();
  switch (dia) {
  case 'Tuesday': return arrayCronograma[0];
  case 'Wednesday': return arrayCronograma[1];
  case 'Monday': return arrayCronograma[6];
  default: return '';
  }
};

function getSchedule(s) {
  const animalUnico = cronograma1(s);
  if (s === 'Monday' || s === 'Tuesday' || s === 'Wednesday') return d(s);
  if (animalUnico === undefined) return cronograma3();
  return animalUnico.availability;
}

module.exports = getSchedule;
