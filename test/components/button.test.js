const button = require("../../src/components/button")

describe("Pattern button component", () => {

	it("has html button's tag.", () => {

		expect(button()).toContain(`<button`);
	});
    
	it("passing html class to the component", () =>{
		expect(button("bar","foo","baz")).toBe("<button class=\"foo baz\">bar</button>");
	});

	const ButtonContents = ['foo','bar','baz'];
	it.each(ButtonContents)("has a button content and closed tag", (ButtonContent) => {
		expect(button(ButtonContent,"foo","baz")).toContain(`>${ButtonContent}</button>`);
	});
});