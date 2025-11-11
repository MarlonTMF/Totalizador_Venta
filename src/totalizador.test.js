import Items_Total from "./Totalizador.js";

describe("Items_Total", () => {
  it("debería calcular el total para 6 items a precio 5", () => {
    expect(Items_Total(6, 5)).toBe(30);
  });
  it("debería calcular el total para 3 items a precio 10", () => {
  expect(Items_Total(3, 10)).toBe(30);
});
});//ssfsf