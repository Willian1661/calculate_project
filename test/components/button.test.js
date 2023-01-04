const Button = require("../../src/components/button")

describe("Pattern Button component", () => {

	it("has html Button's tag.", () => {

		expect(Button()).toContain(`<button`);
	});
    
	it("has Button's tag with class js-btn-pattern", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-pattern\"");
	});

	it("has Button's tag with class js-btn-pattern and js-btn-upper", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-pattern js-btn-upper\">");
	});

	it("has Button's tag with class js-btn-pattern and js-btn-bottom", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-pattern js-btn-bottom\">");
	});

	it("has Button's tag with class js-btn-equal and js-btn-bottom", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-equal js-btn-bottom\">");
	});

	it("has Button's tag with class js-btn-ClearAll", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-ClearAll");
	});
	it("has Button's tag with class js-btn-less-more", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-less-more");
	});
	it("has Button's tag with class js-btn-Del", () =>{
		expect(Button()).toContain("</button>");
		expect(Button()).toContain("class=\"js-btn-Del");
	});
	
	const ButtonContents = ['foo','bar','baz'];
	it.each(ButtonContents)("has a Button content and closed tag", (ButtonContent) => {
		expect(Button(ButtonContent)).toContain(`>${ButtonContent}</button>`);
	});
});