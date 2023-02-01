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
		button(clearAll(),"is-large is-light","C"),
		button(plusMinus(),"is-large is-light","+/-"),
		button(delet(),"is-large is-light","D")
	]);
	const buttonsMiddle = buttonsGroup("buttons-middle",[
		button(numbersIcon("1"),"is-large is-light","1"), button(numbersIcon("2"),"is-large is-light","2"),button(numbersIcon("3"),"is-large is-light","3"),
		button(numbersIcon("4"),"is-large is-light","4"), button(numbersIcon("5"),"is-large is-light","5"),button(numbersIcon("6"),"is-large is-light","6"),
		button(numbersIcon("7"),"is-large is-light","7"), button(numbersIcon("8"),"is-large is-light","8"),button(numbersIcon("9"),"is-large is-light","9"),
	]);
	const buttonsRight = buttonsGroup("buttons-right",[
		button(percent(),"is-large is-light","%"),
		button(devide(),"is-large is-light","/"),
		button(asterisk(),"is-large is-light","*"),
		button(plus(),"is-large is-light","+"),
		button(minus(),"is-large is-light","-"),
	]);

	const buttonsBottom = buttonsGroup("buttons-bottom",[
		button(numbersIcon("0"),"is-large is-light","0"),
		button(period(),"is-large is-light","."),
		button(equals(),"is-large is-light","="),
	]);
	return`
    <div id="${id}" class="box">

        <input type="text" placeholder="0" id="calculator-screen" class="input is-white input-radius has-text-right is-size-2 py-6 is-shadowless"/>

        <div id="calculator-buttons" class="columns is-gapless">
			<div id="horizontal-buttons" class="is-small">
            	${buttonsTop}
            	${buttonsMiddle}
            	${buttonsBottom}
			</div>
			<div id="vertical-buttons" class="column">
            	${buttonsRight}
			</div>
        </div>
    </div>
    `;
}
module.exports = calculator;
