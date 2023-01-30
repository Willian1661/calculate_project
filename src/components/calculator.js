const button = require("./button");
const buttonsGroup = require("./buttons-group");
const numbersIcon = require("./icons/numbers-icon");
const asterisk = require("./icons/asterisk-icon");
const clearAll = require("./icons/clear-all-icon");
const delet = require("./icons/delete-icon");
const devide = require("./icons/divide-icon");
const equals = require("./icons/equals-icon");
const minus = require("./icons/minus-icon");
const percent = require("./icons/percent-icon");
const period = require("./icons/period-icon");
const plus = require("./icons/plus-icon");
const plusMinus = require("./icons/plus-minus-icon");


function calculator(id) {
	const buttonsTop = buttonsGroup("buttons-top", [
		button(clearAll(),"C","is-large is-light"),
		button(plusMinus(),"+/-","is-large is-light"),
		button(delet(),"D","is-large is-light")
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button(numbersIcon("1"),"1","is-large is-light"), button(numbersIcon("2"),"2","is-large is-light"),button(numbersIcon("3"),"3","is-large is-light"),
		button(numbersIcon("4"),"4","is-large is-light"), button(numbersIcon("5"),"5","is-large is-light"),button(numbersIcon("6"),"6","is-large is-light"),
		button(numbersIcon("7"),"7","is-large is-light"), button(numbersIcon("8"),"8","is-large is-light"),button(numbersIcon("9"),"9","is-large is-light"),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button(percent(),"%","is-large is-light"),
		button(devide(),"/","is-large is-light"),
		button(asterisk(),"*","is-large is-light"),
		button(plus(),"+","is-large is-light"),
		button(minus(),"-","is-large is-light"),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button(numbersIcon("0"),"0","is-large is-light"),
		button(period(),".","is-large is-light"),
		button(equals(),"=","is-large is-light"),
	]);
	return`
    <div id="${id}" class="">

        <input type="text" placeholder="0" id="calculator-screen" class="container">

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
