const clearInventory = require('../src/clearInventory');
const { objetosMock } = require('../test/mock');

describe('A função clearInventory', () => {
  clearInventory(objetosMock)
  it('verifica se existe quantity igual a 0 e retorna o array.length -1 se existir', () => {
    expect(objetosMock.length).toBe(2);
  })
});