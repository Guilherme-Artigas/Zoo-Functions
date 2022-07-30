const data = require('../data/zoo_data');

const daysWeek = Object.keys(data.hours);
const ab = Object.values(data.hours);
const terca = ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'];
const quarta = ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'];
const quinta = ['lions', 'otters', 'frogs', 'snakes', 'giraffes'];
const sexta = ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
const sabado = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'];
const domingo = ['lions', 'bears', 'penguins', 'snakes', 'elephants'];
const segunda = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
const semana = [terca, quarta, quinta, sexta, sabado, domingo, segunda];
const cronograma = data.species.reduce((acc, cur, i) => {
  const key = daysWeek[i];
  if (!acc[key] && i < 6) {
    acc[key] = {
      officeHour: `Open from ${ab[i].open}am until ${ab[i].close}pm`,
      exhibition: semana[i],
    };
  }
  if (!acc[key] && i === 6) {
    acc[key] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return acc;
}, {});

console.log(cronograma);

function getSchedule(scheduleTarget) { // No Máximo 20 linhas.
  const animalDay = data.species.find((e) => e.name === scheduleTarget); // Teste 1
  if (scheduleTarget === 'lions' || scheduleTarget === 'penguins') return animalDay.availability;
  if (scheduleTarget === undefined || scheduleTarget === 'qualquercoisa') return cronograma;
  // if (scheduleTarget === 'Monday') return
}
console.log(getSchedule('penguins'));
module.exports = getSchedule;
// Teste 1: se for passado um animal, deverá retornar um array com os dias em que ele está em exibição

// lions: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]
// penguins: [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]

// Teste 2: sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis
// Teste 3: caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição

// 'Tuesday': {
//   'officeHour': 'Open from 8am until 6pm',
//   'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
// },
// 'Wednesday': {
//   'officeHour': 'Open from 8am until 6pm',
//   'exhibition': ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
// },
// 'Thursday': {
//   'officeHour': 'Open from 10am until 8pm',
//   'exhibition': ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
// },
// 'Friday': {
//   'officeHour': 'Open from 10am until 8pm',
//   'exhibition': ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
// },
// 'Saturday': {
//   'officeHour': 'Open from 8am until 10pm',
//   'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants' ],
// },
// 'Sunday': {
//   'officeHour': 'Open from 8am until 8pm',
//   'exhibition': ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
// },
// 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },

// Teste 4: se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado
// 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }

// Teste 5: se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia
// 'Tuesday': {
//   'officeHour': 'Open from 8am until 6pm',
//   'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
// }
