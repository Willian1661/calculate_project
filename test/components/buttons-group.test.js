const button = require("../../src/components/button");
const buttonsGroup = require("../../src/components/buttons-group")

describe("pattern div component", () =>{

    it("is passing dynamic buttons", () => {
        const buttons =[ 
        button("foo","fooClass"),
        button("baz","bazClass")
    ]
        expect(buttonsGroup("buttonsId",buttons)).toMatchSnapshot()
    });
	
})