const findItem = require('../src/findItem');
const { objetosMock } = require('../test/mock');


describe('a função findItem', () => {
  it('retorna o item do inventário dado o nome', () => {
    expect(findItem(objetosMock, 'yep')).toBe(objetosMock[0])
  })
  it('lança um erro para itens inexistentes', () => {
    expect(() => {findItem(objetosMock, 'yep3')}).toThrow(new Error('O item não foi encontrado'))
  });
});