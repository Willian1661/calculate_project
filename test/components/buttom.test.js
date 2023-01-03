const buttom = require("../../src/assets/javascript/components/buttom");

describe("Pattern Button component", () => {

	it("has html buttom's tag.", () => {

		expect(buttom()).toContain(`<button`);
	});
    
	it("has buttom's tag with class js-btn-pattern", () =>{
		expect(buttom()).toContain("</button>");
	});

	const buttomContents = ["foo","bar","baz"];
	it.each(buttomContents)("has a buttom content and closed tag", (buttomContent) => {
		expect(buttom(buttomContent)).toContain(`>${buttomContent}</button>`);
	});
});