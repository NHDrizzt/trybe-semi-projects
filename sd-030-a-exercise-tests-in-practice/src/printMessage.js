const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}

const printMessage = (characterInfo) => {
  console.log(characterInfo.personagem)
  if (characterInfo.personagem !== 'Margarida') {
    throw new Error('O nome nao e Margarida')
  } else {
    return `Boas vindas, ${characterInfo.personagem}`
  }
}

console.log(printMessage(info))

module.exports = { info, printMessage }
