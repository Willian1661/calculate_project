const button = require("../../src/components/button");
const calculatorScreen = require("../../src/components/calculator-component")

describe("calculator screen component", () =>{
    
    const buttons =[ 
        button("foo","fooClass"),
        button("baz","bazClass")
    ]
    it("is passing calculator screen", () => {
        expect(calculatorScreen("body-calc-id",buttons)).toMatchSnapshot()
    });

})