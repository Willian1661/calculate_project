const numbersIcon = require("../../src/components/fa-icons/numbers-icon")
const asterisk = require("../../src/components/fa-icons/asterisk-icon")
const clearAll = require("../../src/components/fa-icons/clear-all-icon")
const delet = require("../../src/components/fa-icons/delete-icon")
const devide = require("../../src/components/fa-icons/divide-icon")
const equals = require("../../src/components/fa-icons/equals-icon")
const minus = require("../../src/components/fa-icons/minus-icon")
const percent = require("../../src/components/fa-icons/percent-icon")
const period = require("../../src/components/fa-icons/period-icon")
const plus = require("../../src/components/fa-icons/plus-icon")
const plusMinus = require("../../src/components/fa-icons/plus-minus-icon")

describe("Font Awesome icons", () =>{
    const operators = [asterisk(),devide(),plus(),plusMinus(),minus(),percent(),]
    const especials = [clearAll(),delet(),equals(),period()]
    const numbers = ["1","2","3","4","5","6","7","8","9","0",]

    it.each(numbers)("'s passing fa-icons correctly", (number) => {
        expect(numbersIcon(number)).toMatchSnapshot()
    });

    it("'s passing especial icons correctly", () => {
        expect(especials).toMatchSnapshot()
    });

    it("'s passing operators icon correctly", () => {
        expect(operators).toMatchSnapshot()
    });
    
})