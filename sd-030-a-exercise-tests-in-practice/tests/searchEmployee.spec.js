// exercise-bonus.test.js

const { professionalBoard, searchEmployee } = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('8579-6', "firstName")).toBe('Ana')
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('1256-4', "lastName")).toBe('Bezos')
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    expect(searchEmployee('4678-2', "specialities")).toEqual(['Backend'])
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(searchEmployee('4678-3', "firstName")).toBe('ID não identificada');
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(searchEmployee('4678-3', professionalBoard)).toBe('ID não identificada');
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    expect(searchEmployee(124245)).toBe('Informacao Inexistente');
  });
});
