const calculator = require("../../src/components/calculator")

describe("calculator screen component", () =>{
    
    it("is passing calculator component", () => {
        expect(calculator("body-calc-id")).toMatchSnapshot()
    });

})