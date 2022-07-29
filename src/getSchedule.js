const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
// se for passado um animal, deverá retornar um array com os dias em que ele está em exibição
// lions: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]
// penguins: [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]

// sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis

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
