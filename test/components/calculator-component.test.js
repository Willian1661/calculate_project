// const button = require("../../src/components/button");
const calculator = require("../../src/components/calculator-component")

describe("calculator screen component", () =>{
    
    // const buttons =[ 
    //     button("foo","fooClass"),
    //     button("baz","bazClass")
    // ]
    it("is passing calculator screen", () => {
        expect(calculator("body-calc-id")).toMatchSnapshot()
    });

})