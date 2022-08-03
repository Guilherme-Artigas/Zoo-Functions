const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Caso não receba nenhum valor deve retornar todos os dias e horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  test('Caso a função receba os valores, Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  test('Caso a função receba os valores, Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  test('Caso a função receba os valores, Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  test('Caso receba, Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  test('Caso receba, Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('Caso receba, Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  test('Caso receba, Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  test('Caso receba, Monday e 13:00-AM', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  test('Caso receba, Tuesday e 09:60-AM', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
