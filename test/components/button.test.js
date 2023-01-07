const button = require("../../src/components/button")
const buttonsGroup = require("../../src/components/buttons-group")

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
});

describe("pattern div component", () =>{

	it("has html div's tag open", () =>{
		expect(buttonsGroup()).toContain("<div ");
	});
	
	it("passing html div to the component", () =>{
		expect(buttonsGroup("bar")).toBe("<div id=\"bar\"></div>");
	});
	const divId = ['foo','bar','baz'];
	it.each(divId)("passing html div to the component", (divId) =>{
		expect(buttonsGroup(divId)).toContain(`id=\"${divId}\"></div>`);
	});
})