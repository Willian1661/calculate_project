const calculatorProcess = require("../../src/services/calculator-process")

describe("calculator's visor test", () => {
  const operations = [
    ["10", "+","30","=","40","C"],
    ["10", "+","10","=","20","C"],
    ["20", "-","10","=","10","C"],
    ["50", "*","10","=","500","C"],
    ["30", "/","10","=","3","C"],
    ["10", "%","1","=","0.1","C"],
  ];

	it.each(operations)("'s printing a basic mathematic operation", (oper1,oper2,oper3,oper4,oper5,oper6) => {
		
    let visorMock = jest.fn()
    
    calculatorProcess(oper1,visorMock)
    calculatorProcess(oper2,visorMock)
    calculatorProcess(oper3,visorMock)
    calculatorProcess(oper4,visorMock)
    calculatorProcess(oper6,visorMock)
    
    expect(visorMock.mock.calls[0][0]).toBe(oper1);
    expect(visorMock.mock.calls[1][0]).toBe(oper1 + oper2);
    expect(visorMock.mock.calls[2][0]).toBe(oper1 + oper2 + oper3);
    expect(visorMock.mock.calls[3][0]).toBe(oper5);
    expect(visorMock.mock.calls[4][0]).toBe("");

	});

  const changeSing = [["1","+/-","-1","C"]]
  it.each(changeSing)("'s working change sign button", (oper1,oper2,oper3,oper4) => {
    
    let visorMock3 = jest.fn()
    calculatorProcess(oper1,visorMock3)
    calculatorProcess(oper2,visorMock3)
    calculatorProcess(oper4,visorMock3)

    expect(visorMock3.mock.calls[0][0]).toBe(oper1);
    expect(visorMock3.mock.calls[1][0]).toBe(oper3);
    expect(visorMock3.mock.calls[2][0]).toBe("");
  });
  const deleteLastNumber = [["10","Del","1","C"]]
  it.each(deleteLastNumber)("'s working delete button", (oper1,oper2,oper3,oper4) => {

    let visorMock4 = jest.fn()

    calculatorProcess(oper1,visorMock4)
    calculatorProcess(oper2,visorMock4)
    calculatorProcess(oper4,visorMock4)

    expect(visorMock4.mock.calls[0][0]).toBe(oper1);
    expect(visorMock4.mock.calls[1][0]).toBe(oper3);
    expect(visorMock4.mock.calls[2][0]).toBe("");

  });
});

