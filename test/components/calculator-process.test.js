const calculatorProcess = require("../../src/services/calculator-process")

describe("calculator's visor test", () => {
  const operations = [
    ["10", "+","30","=","40"],
    ["10", "+","10","=","20"],
  ];

	it.each(operations)("'s printing a basic mathematic operation", (oper1,oper2,oper3,oper4,oper5) => {
		
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
	});

  it("'s working clear all button", () => {
    
    let visorMock2 = jest.fn()

    calculatorProcess("C",visorMock2)

    expect(visorMock2.mock.calls[0][0]).toBe("");
  });
  
  it("'s working change sign button", () => {
    
    let visorMock3 = jest.fn()
    calculatorProcess("1",visorMock3)
    calculatorProcess("+/-",visorMock3)
    calculatorProcess("C",visorMock3)

    expect(visorMock3.mock.calls[1][0]).toBe("-1");
    expect(visorMock3.mock.calls[2][0]).toBe("");

  });
  
  it("'s working delete button", () => {

    let visorMock4 = jest.fn()

    calculatorProcess("1",visorMock4)
    calculatorProcess("0",visorMock4)
    calculatorProcess("Del",visorMock4)
    calculatorProcess("C",visorMock4)

    expect(visorMock4.mock.calls[2][0]).toBe("1");
    expect(visorMock4.mock.calls[3][0]).toBe("");

  });
});

