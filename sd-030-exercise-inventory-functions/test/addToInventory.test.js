const addToInventory = require('../src/addToInventory');

describe('a função addToInventory', () => {
  const arrayMock = []
  addToInventory(arrayMock, 2)
  it('verifica se o tamanho do array aumentou', () => {
    expect(arrayMock.length).toBe(1)
  })
  it('verifica se nao for passado um array', () => {
    expect(() => { addToInventory(1, 1)}).toThrow(new Error('O inventário deve ser um array'))
  })
});