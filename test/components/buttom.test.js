const buttom = require("../../src/components/buttom");

/* 
<button class="js-btn-padroes" data-valor="8">8</button>
 */

describe("Buttom component", () => {

	it("has html buttom's tag.", () => {

		expect(buttom()).toContain("<button");
	});
    
	it("has buttom's tag with class js-btn-padroes", () =>{
		expect(buttom()).toContain("</button>");
		expect(buttom()).toContain("class=\"buttom js-btn-padroes\"");
	});

	const buttomContents = ["foo","bar","baz"];
	it.each(buttomContents)("has a buttom content", (buttomContent) => {
		expect(buttom(buttomContent)).toContain(`>${buttomContent}</button>`);
		expect(buttom(buttomContent)).toContain(`data-valor"${buttomContent}"`);
	});
});
