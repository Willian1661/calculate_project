const Button = require("../../src/components/button")

describe("Pattern Button component", () => {

	it("has html Button's tag.", () => {

		expect(Button()).toContain(`<button`);
	});
    
	it("has Button's tag with class js-buttons", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-buttons\"");
	});

	const ButtonContents = ['foo','bar','baz'];
	it.each(ButtonContents)("has a Button content and closed tag", (ButtonContent) => {
		expect(Button(ButtonContent)).toContain(`>${ButtonContent}</button>`);
	});
});