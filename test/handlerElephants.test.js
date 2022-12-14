const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Retornar a quantidade de elefantes caso receba o valor "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Retornar um array contendo o nome Jefferson caso receba o valor "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('Retornar um valor aproximado de 10.5 quando receber o valor "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  test('Retornar a localização dos elefantes quando receber o valor "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('Retornar a popularidade dos elefantes quando receber o valor "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  test('Retornar um array de dias, quando passar o valor "availability"', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  test('Não pode conter Monday quando passado o valor "availability"', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  test('Retornar undefined caso não receba nenhum valor', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Retornar parâmetro inválido caso receba um objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Retornar null caso receba uma string que não contemple a função', () => {
    expect(handlerElephants('seila')).toBe(null);
  });
});
