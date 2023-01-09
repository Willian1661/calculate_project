const button = require("../../src/components/button");
const buttonsGroup = require("../../src/components/buttons-group")
const calculatorScreen = require("../../src/components/calculator-component")

describe("calculator screen component", () =>{
    
    const buttons =[ 
        button("foo","fooClass"),
        button("baz","bazClass")
    ]
    it("is passing calculator screen", () => {
        expect(calculatorScreen("body-calc-id","div-screen-id","screen-id",buttonsGroup("buttons-id",buttons))).toMatchSnapshot()
    });

})