const button = require("./button");
const buttonsGroup = require("./buttons-group");
const numbersIcon = require("../../src/components/fa-icons/numbers-icon")
const asterisk = require("../../src/components/fa-icons/asterisk-icon")
const clearAll = require("../../src/components/fa-icons/clear-all-icon")
const delet = require("../../src/components/fa-icons/delete-icon")
const devide = require("./fa-icons/divide-icon")
const equals = require("../../src/components/fa-icons/equals-icon")
const minus = require("../../src/components/fa-icons/minus-icon")
const percent = require("../../src/components/fa-icons/percent-icon")
const period = require("../../src/components/fa-icons/period-icon")
const plus = require("../../src/components/fa-icons/plus-icon")
const plusMinus = require("../../src/components/fa-icons/plus-minus-icon")


function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button(clearAll()),
		button(plusMinus()),
		button(delet())
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button(numbersIcon("1")), button(numbersIcon("2")),button(numbersIcon("3")),
		button(numbersIcon("4")), button(numbersIcon("5")),button(numbersIcon("6")),
		button(numbersIcon("7")), button(numbersIcon("8")),button(numbersIcon("9")),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button(percent()),
		button(devide()),
		button(asterisk()),
		button(plus()),
		button(minus()),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button(numbersIcon("0")),
		button(period()),
		button(equals()),
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
