const getInventoryValue = require("../src/getInventoryValue");
const { objectMockWithPrice } = require("../test/mock");

describe("a função getInventoryValue", () => {
  it("retorna zero para um inventário vazio", () => {
    expect(getInventoryValue([])).toBe(0);
  });
  it("retorna o valor do inventário", () => {
    expect(getInventoryValue(objectMockWithPrice)).toBe(525.34);
  });
});
