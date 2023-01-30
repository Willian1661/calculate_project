const button = require("../../src/components/button")

describe("Pattern button component", () => {

	it("has a html button's  tag", () =>{
		expect(button("foo","bar","is-baz")).toMatchSnapshot();
	});
	
});