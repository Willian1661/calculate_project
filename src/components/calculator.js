const button = require("./button");
const buttonsGroup = require("./buttons-group");

function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button("C","clear-all upper left"),
		button("+/-","less-more upper"),
		button("CE","del upper")
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button("1","left"), button("2"),button("3"),
		button("4","left"), button("5"),button("6"),
		button("7","left"), button("8"),button("9"),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button("%","bottom upper"),
		button("/","right"),
		button("*","right"),
		button("+","right"),
		button("-","bottom right"),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button("0","bottom"),
		button(".","bottom"),
		button("=","equal bottom"),
	]);
	return`
    <div id="${id}">

        <input type="text" placeholder="0" id="calculator-screen">

        <div id="calculator-buttons">
            ${buttonsTop}
            ${buttonsMiddle}
            ${buttonsRight}
            ${buttonsBottom}
        </div>
    </div>
    `;
}
module.exports = calculator;
