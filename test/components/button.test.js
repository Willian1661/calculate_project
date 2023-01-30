const button = require("../../src/components/button")

describe("Pattern button component", () => {

	it("has html button's tag.", () => {

		expect(button()).toContain(`<button`);
	});
    
	it("passing html class to the component", () =>{
		expect(button("bar","foo")).toBe("<button class=\"foo\">bar</button>");
	});

	const buttonContents = ['foo','bar','baz'];
	it.each(buttonContents)("has a button content and closed tag", (buttonContent) => {
		expect(button(buttonContent,"foo")).toContain(`>${buttonContent}</button>`);
	});

	it("has a button with an optional class.", () =>{
		expect(button("foo")).toBe(`<button class="button">foo</button>`);
	});
});