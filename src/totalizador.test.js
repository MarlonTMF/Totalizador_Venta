import Items_Total from "./Totalizador.js";

describe("Items_Total",() => {
    /*it("Mostar Items",()=> {
        expect(Items_Total(6)).toEqual(6);

    });*/
    it("Mostar Precio",()=> {
        expect(Items_Total(6,5)).toEqual(30);

    });
});

