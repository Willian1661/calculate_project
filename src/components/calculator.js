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
	const buttonsFirstLine = buttonsGroup("buttonsFirstLine", [
		button(clearAll(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-danger", "C"), 
		button(plusMinus(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "+/-"),
		button(delet(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "D"), 
		button(percent(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "%")
	], "columns is-justify-content-center");

	const buttonsSecondLine = buttonsGroup("buttonsSecondLine", [
		button(numbersIcon("1"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "1"), 
		button(numbersIcon("2"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "2"),
		button(numbersIcon("3"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "3"), 
		button(devide(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "/")
	], "columns is-justify-content-center");

	const buttonsThirdLine = buttonsGroup("buttonsThirdLine", [
		button(numbersIcon("4"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "4"), 
		button(numbersIcon("5"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "5"),
		button(numbersIcon("6"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "6"), 
		button(asterisk(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "*")
	], "columns is-justify-content-center");

	const buttonsFourthLine = buttonsGroup("buttonsFourthLine", [
		button(numbersIcon("7"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "7"), 
		button(numbersIcon("8"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "8"),
		button(numbersIcon("9"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "9"), 
		button(plus(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "+")
	], "columns is-justify-content-center");

	const buttonsFifthLine = buttonsGroup("buttonsFifthLine", [
		button(numbersIcon("0"), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "0"), 
		button(period(), "button is-large is-light m-2 is-fullwidth is-one-fifth ", "."),
		button(equals(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-background-warning has-text-white", "="), 
		button(minus(), "button is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning", "-")
	], "columns is-justify-content-center");


	return `
	<div class="column is-one-fifth is-offset-5">
		<div id="${id}" class="box">
    		<div class="container mb-2">	
	
				<input type="text" placeholder="0" id="calculator-screen" class="input is-white has-text-right is-size-3 px-0 py-6 mb-4 is-shadowless has-text-weight-semibold"
    	            size="8" />

    	        			${buttonsFirstLine}
    	        			${buttonsSecondLine}
    	        			${buttonsThirdLine}
    	        			${buttonsFourthLine}
    	        			${buttonsFifthLine}
			</div>
		</div>
	</div>
    `;
}
module.exports = calculator;
