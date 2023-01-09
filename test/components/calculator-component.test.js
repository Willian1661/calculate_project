const calculator = require("../../src/components/calculator-component")

describe("calculator screen component", () =>{
    
    it("is passing calculator screen", () => {
        expect(calculator("body-calc-id")).toMatchSnapshot()
    });

})