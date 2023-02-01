const button = require("../../src/components/button");
const buttonsGroup = require("../../src/components/buttons-group")

describe("pattern div component", () =>{

    it("is passing dynamic buttons", () => {
        const buttons =[ 
        button("foo","is-foo","foo"),
        button("baz","is-baz","baz")
    ]
        expect(buttonsGroup("buttons-id",buttons,"is-style")).toMatchSnapshot()
    });
	
})