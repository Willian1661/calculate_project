const button = require("./button");
const buttonsGroup = require("./buttons-group");

function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button(`<i class="fa-solid fa-c" data-value="C"></i>`),
		button(`<i class="fa-solid fa-plus-minus" data-value="+/-"></i>`),
		button(`<i class="fa-solid fa-delete-left" data-value="D"></i>`)
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button(`<i class="fa-solid fa-1" data-value="1"></i>`), button(`<i class="fa-solid fa-2" data-value="2"></i>`),button(`<i class="fa-solid fa-3" data-value="3"></i>`),
		button(`<i class="fa-solid fa-4" data-value="2"></i>`), button(`<i class="fa-solid fa-5" data-value="5"></i>`),button(`<i class="fa-solid fa-6" data-value="6"></i>`),
		button(`<i class="fa-solid fa-7" data-value="3"></i>`), button(`<i class="fa-solid fa-8" data-value="8"></i>`),button(`<i class="fa-solid fa-9" data-value="9"></i>`),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button(`<i class="fa-solid fa-percent" data-value="%"></i>`),
		button(`<i class="fa-solid fa-divide" data-value="/"></i>`),
		button(`<i class="fa-solid fa-asterisk" data-value="*"></i>`),
		button(`<i class="fa-solid fa-plus" data-value="+"></i>`),
		button(`<i class="fa-solid fa-minus" data-value="-"></i>`),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button(`<i class="fa-solid fa-0" data-value="0"></i>`),
		button(`<i class="fa-solid fa-period" data-value=".">.</i>`),
		button(`<i class="fa-solid fa-equals" data-value="="></i>`),
	]);
	return`
    <div id="${id}">

        <input type="text" placeholder="0" id="calculator-screen">

        <div id="calculator-buttons">
            ${buttonsTop}
            ${buttonsRight}
            ${buttonsMiddle}
            ${buttonsBottom}
        </div>
    </div>
    `;
}
module.exports = calculator;
