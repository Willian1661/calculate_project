const calculatorProcess = require("../../src/services/calculator-process")

describe("button's content is passing", () => {
  const operations = [
    ["10", "+","30","=","40"],
    ["10", "+","10","=","20"],
  ];

	it.each(operations)("has a button content and closed tag", (oper1,oper2,oper3,oper4,oper5) => {
		let visorMock = jest.fn()
    calculatorProcess(oper1,visorMock)
    calculatorProcess(oper2,visorMock)
    calculatorProcess(oper3,visorMock)
    calculatorProcess(oper4,visorMock)
    calculatorProcess("C",visorMock)

    expect(visorMock.mock.calls[0][0]).toBe(oper1);
    expect(visorMock.mock.calls[1][0]).toBe(oper1 + oper2);
    expect(visorMock.mock.calls[2][0]).toBe(oper1 + oper2 + oper3);
    expect(visorMock.mock.calls[3][0]).toBe(oper5);
    console.log(oper5);
	});
});

