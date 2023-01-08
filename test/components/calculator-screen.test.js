const calculatorScreen = require("../../src/components/calculator-screen")

describe("calculator screen component", () =>{

    it("is passing calculator screen", () => {
        expect(calculatorScreen("baz","foo")).toMatchSnapshot()
    });

})