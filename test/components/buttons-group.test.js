const button = require("../../src/components/button");
const buttonsGroup = require("../../src/components/buttons-group")

describe("pattern div component", () =>{

    it("is passing dynamic buttons", () => {
        const buttons =[ 
        button("foo","foo","is-foo"),
        button("baz","baz","is-baz")
    ]
        expect(buttonsGroup("buttons-id",buttons)).toMatchSnapshot()
    });
	
})