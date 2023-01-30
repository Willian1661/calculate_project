const button = require("./button");
const buttonsGroup = require("./buttons-group");
const numbersIcon = require("../../src/components/fa-icons/numbers-icon");
const asterisk = require("../../src/components/fa-icons/asterisk-icon");
const clearAll = require("../../src/components/fa-icons/clear-all-icon");
const delet = require("../../src/components/fa-icons/delete-icon");
const devide = require("./fa-icons/divide-icon");
const equals = require("../../src/components/fa-icons/equals-icon");
const minus = require("../../src/components/fa-icons/minus-icon");
const percent = require("../../src/components/fa-icons/percent-icon");
const period = require("../../src/components/fa-icons/period-icon");
const plus = require("../../src/components/fa-icons/plus-icon");
const plusMinus = require("../../src/components/fa-icons/plus-minus-icon");


function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button(clearAll(),"button is-large is-light"),
		button(plusMinus(),"button is-large is-light"),
		button(delet(),"button is-large is-light")
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button(numbersIcon("1"),"button is-large is-light"), button(numbersIcon("2"),"button is-large is-light"),button(numbersIcon("3"),"button is-large is-light"),
		button(numbersIcon("4"),"button is-large is-light"), button(numbersIcon("5"),"button is-large is-light"),button(numbersIcon("6"),"button is-large is-light"),
		button(numbersIcon("7"),"button is-large is-light"), button(numbersIcon("8"),"button is-large is-light"),button(numbersIcon("9"),"button is-large is-light"),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button(percent(),"button is-large is-light"),
		button(devide(),"button is-large is-light"),
		button(asterisk(),"button is-large is-light"),
		button(plus(),"button is-large is-light"),
		button(minus(),"button is-large is-light"),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button(numbersIcon("0"),"button is-large is-light"),
		button(period(),"button is-large is-light"),
		button(equals(),"button is-large is-light"),
	]);
	return`
    <div id="${id}">

        <input type="text" placeholder="0" id="calculator-screen">

        <div id="calculator-buttons" class="box">
            ${buttonsTop}
            ${buttonsRight}
            ${buttonsMiddle}
            ${buttonsBottom}
        </div>
    </div>
    `;
}
module.exports = calculator;
