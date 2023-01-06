const button = require("../../src/components/button")

describe("Pattern button component", () => {

	it("has html button's tag.", () => {

		expect(button()).toContain(`<button`);
	});
    
	it("passing html class to the component", () =>{
		expect(button("foo","baz")).toBe(`
	<div id="foo">
	<button class="clear-all">C</button>
	<button class="less-more">+/-</button>
	<button class="del">CE</button>
	<button class="baz">%</button>
	<button class="baz">7</button>
	<button class="baz">8</button>
	<button class="baz">9</button>
	<button class="baz">/</button>
	<button class="baz">4</button>
	<button class="baz">5</button>
	<button class="baz">6</button>
	<button class="baz">*</button>
	<button class="baz">1</button>
	<button class="baz">2</button>
	<button class="baz">3</button>
	<button class="baz">+</button>
	<button class="baz">0</button>
	<button class="baz">.</button>
	<button class="equal">=</button>
	<button class="baz">-</button>
	</div>
	`);
	});

	const ButtonContents = ['foo','bar','baz'];
	it.each(ButtonContents)("has a button content and closed tag", (ButtonContent) => {
		expect(button(ButtonContent,"foo")).toContain(`
	<div id="${ButtonContent}">
	<button class="clear-all">C</button>
	<button class="less-more">+/-</button>
	<button class="del">CE</button>
	<button class="foo">%</button>
	<button class="foo">7</button>
	<button class="foo">8</button>
	<button class="foo">9</button>
	<button class="foo">/</button>
	<button class="foo">4</button>
	<button class="foo">5</button>
	<button class="foo">6</button>
	<button class="foo">*</button>
	<button class="foo">1</button>
	<button class="foo">2</button>
	<button class="foo">3</button>
	<button class="foo">+</button>
	<button class="foo">0</button>
	<button class="foo">.</button>
	<button class="equal">=</button>
	<button class="foo">-</button>
	</div>
	`);
	});
});