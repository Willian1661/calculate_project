const iconNumber = require("../../src/components/icons/numbers-icon")
const iconAsterisk = require("../../src/components/icons/asterisk-icon")
const iconClearAll = require("../../src/components/icons/clear-all-icon")
const iconDelete = require("../../src/components/icons/delete-icon")
const iconDevide = require("../../src/components/icons/divide-icon")
const iconEquals = require("../../src/components/icons/equals-icon")
const iconMinus = require("../../src/components/icons/minus-icon")
const iconPercent = require("../../src/components/icons/percent-icon")
const iconperiod = require("../../src/components/icons/period-icon")
const iconPlus = require("../../src/components/icons/plus-icon")
const iconPlusMinus = require("../../src/components/icons/plus-minus-icon")

describe("operators/numbers/especial icons", () =>{
    const icons = [
        iconAsterisk(),iconDevide(),iconPlus(),iconPlusMinus(),iconMinus(),
        iconPercent(),iconClearAll(),iconDelete(),iconEquals(),iconperiod(),
        iconNumber("1"),iconNumber("2"),iconNumber("3"),iconNumber("4"),iconNumber("5"),
        iconNumber("6"),iconNumber("7"),iconNumber("8"),iconNumber("9"),iconNumber("0")
    ]
        it("has passed all the icons correctly", () => {
        expect(icons).toMatchSnapshot()
    });
    
})