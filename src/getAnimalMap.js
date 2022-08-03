const data = require('../data/zoo_data');

const northEast = (arg1) => {
  const lista1 = [];
  const lista2 = [];
  data.species.forEach((e) => {
    if (e.location === 'NE') {
      lista1.push(e.name);
      lista2.push({ [e.name]: e.residents.map((element) => element.name) });
    }
  });
  if (arg1 === undefined) return lista1;
  if (arg1 === true) return lista2;
};

const northEastNO = () => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'NE') {
      lista.push({ [e.name]: e.residents.map((element) => element.name).sort() });
    }
  });
  return lista;
};

const northEastFilter = (arg1) => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'NE') {
      lista.push({ [e.name]: e.residents.filter((element) => element.sex === arg1)
        .map((e1) => e1.name) });
    }
  });
  return lista;
};

const northWest = (arg1) => {
  const lista1 = [];
  const lista2 = [];
  data.species.forEach((e) => {
    if (e.location === 'NW') {
      lista1.push(e.name);
      lista2.push({ [e.name]: e.residents.map((element) => element.name) });
    }
  });
  if (arg1 === undefined) return lista1;
  if (arg1 === true) return lista2;
};

const northWestNO = () => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'NW') {
      lista.push({ [e.name]: e.residents.map((element) => element.name).sort() });
    }
  });
  return lista;
};

const northWestFilter = (arg1) => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'NW') {
      lista.push({ [e.name]: e.residents.filter((element) => element.sex === arg1)
        .map((e1) => e1.name) });
    }
  });
  return lista;
};

const SouthEast = (arg1) => {
  const lista1 = [];
  const lista2 = [];
  data.species.forEach((e) => {
    if (e.location === 'SE') {
      lista1.push(e.name);
      lista2.push({ [e.name]: e.residents.map((element) => element.name) });
    }
  });
  if (arg1 === undefined) return lista1;
  if (arg1 === true) return lista2;
};

const SouthEastNO = () => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'SE') {
      lista.push({ [e.name]: e.residents.map((element) => element.name).sort() });
    }
  });
  return lista;
};

const SouthEastFilter = (arg1) => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'SE') {
      lista.push({ [e.name]: e.residents.filter((element) => element.sex === arg1)
        .map((e1) => e1.name) });
    }
  });
  return lista;
};

const SouthWest = (arg1) => {
  const lista1 = [];
  const lista2 = [];
  data.species.forEach((e) => {
    if (e.location === 'SW') {
      lista1.push(e.name);
      lista2.push({ [e.name]: e.residents.map((element) => element.name) });
    }
  });
  if (arg1 === undefined) return lista1;
  if (arg1 === true) return lista2;
};

const SouthWestNO = () => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'SW') {
      lista.push({ [e.name]: e.residents.map((element) => element.name).sort() });
    }
  });
  return lista;
};

const SouthWestFilter = (arg1) => {
  const lista = [];
  data.species.forEach((e) => {
    if (e.location === 'SW') {
      lista.push({ [e.name]: e.residents.filter((element) => element.sex === arg1)
        .map((e1) => e1.name) });
    }
  });
  return lista;
};

const zooLocations = (arg1) => {
  const obj = {
    NE: northEast(arg1),
    NW: northWest(arg1),
    SE: SouthEast(arg1),
    SW: SouthWest(arg1),
  };
  return obj;
};

const zooNO = () => {
  const obj = {
    NE: northEastNO(),
    NW: northWestNO(),
    SE: SouthEastNO(),
    SW: SouthWestNO(),
  };
  return obj;
};

const zooFilter = (arg1) => {
  const obj = {
    NE: northEastFilter(arg1),
    NW: northWestFilter(arg1),
    SE: SouthEastFilter(arg1),
    SW: SouthWestFilter(arg1),
  };
  return obj;
};

function getAnimalMap(options = {}) {
  if (options.includeNames === true) return zooLocations(options.includeNames);
  if (options.sorted === true) return zooNO();
  if (options.sex === 'female' || options.sex === 'male') return zooFilter(options.sex);
  return zooLocations();
}
// Devem dar o mesmo retorno
// console.log(getAnimalMap()); // 1º Teste
console.log(getAnimalMap({ sex: 'female' })); // 2º Teste
// console.log(getAnimalMap({ sex: 'female', sorted: true })); // 3º Teste
// -----------------------------------------------------------------------

// console.log(getAnimalMap({ includeNames: true })); // 4º Teste
// console.log(getAnimalMap({ sorted: true })); // 5 Teste
// console.log(getAnimalMap({ sex: 'male' })); // 6º Teste
// console.log(JSON.stringify(getAnimalMap({ includeNames: true }), null, ' '));
module.exports = getAnimalMap;
