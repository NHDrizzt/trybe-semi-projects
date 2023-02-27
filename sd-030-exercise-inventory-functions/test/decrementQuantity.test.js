const decrementQuantity = require("../src/decrementQuantity");
const { objetosMock } = require("../test/mock");

describe("a função decrementQuantity", () => {
  decrementQuantity(objetosMock, "yep", 1);
  decrementQuantity(objetosMock, "yep2", 1);
  it("desconta da quantidade disponível do item", () => {
    expect(objetosMock[0].quantity).toBe(1);
  });
  it("decrementa a quantidade disponível do item", () => {
    expect(objetosMock[1].quantity).toBe(4);
  });
  it("lanca um erro ao tentar remover mais do que tem", () => {
    expect(() => {
      decrementQuantity(objetosMock, "yep", 3);
    }).toThrow(
      new Error("O decremento deve ser menor ou igual a quantidade atual")
    );
  });
});
