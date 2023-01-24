const button = require("./button");
const buttonsGroup = require("./buttons-group");

function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button("C"),
		button("+/-"),
		button("CE")
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button("1"), button("2"),button("3"),
		button("4"), button("5"),button("6"),
		button("7"), button("8"),button("9"),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button("%"),
		button("/"),
		button("*"),
		button("+"),
		button("-"),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button("0"),
		button("."),
		button("="),
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
