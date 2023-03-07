const { info, printMessage } = require('../src/printMessage')

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it('Testa a propriedade personagem no objeto.', () => {
    expect(info.hasOwnProperty('personagem')).toBe(true)
  })
})

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it('Testa a informação de boas vindas.', () => {
    expect(printMessage(info)).toBe(`Boas vindas, ${info.personagem}`)
  })

  it('Testa a informação referente ao nome da personagem.', () => {
    expect(info.personagem).toBe('Margarida')
  })
})

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it('Testa o fluxo de exceção da função printMessage.', () => {
    expect(() => {
      info.personagem = 'nani'
      printMessage(info)
    }).toThrowError('O nome nao e Margarida')
  })
})
