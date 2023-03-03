import CalculatorProcess from "../../src/services/CalculatorProcess";

describe("calculator's visor test", () => {
  const operations = [
    ["10", "+", "30", "=", "40", "C"],
    ["10", "+", "10", "=", "20", "C"],
    ["20", "-", "10", "=", "10", "C"],
    ["50", "*", "10", "=", "500", "C"],
    ["300", "/", "10", "=", "30", "C"],
    ["10", "%", "1", "=", "0.1", "C"],
    ["2.5", "+", "2.5", "=", "5", "C"],
    ["100", "*", "100", "=", "10000", "C"],
  ];

  it.each(operations)("'s printing a basic mathematic operation", (oper1, oper2, oper3, oper4, oper5, oper6) => {

    let visorMock = jest.fn()

    CalculatorProcess(oper1, visorMock)
    CalculatorProcess(oper2, visorMock)
    CalculatorProcess(oper3, visorMock)
    CalculatorProcess(oper4, visorMock)
    CalculatorProcess(oper6, visorMock)

    expect(visorMock.mock.calls[0][0]).toBe(oper1);
    expect(visorMock.mock.calls[1][0]).toBe(oper1 + oper2);
    expect(visorMock.mock.calls[2][0]).toBe(oper1 + oper2 + oper3);
    expect(visorMock.mock.calls[3][0]).toBe(oper5);
    expect(visorMock.mock.calls[4][0]).toBe("");

  });

  it("is working change sign button", () => {

    let visorMock3 = jest.fn()
    CalculatorProcess("1", visorMock3)
    CalculatorProcess("S", visorMock3)
    CalculatorProcess("C", visorMock3)

    expect(visorMock3.mock.calls[0][0]).toBe("1");
    expect(visorMock3.mock.calls[1][0]).toBe("-1");
    expect(visorMock3.mock.calls[2][0]).toBe("");
  });

  it("is working delete button", () => {

    let visorMock4 = jest.fn()

    CalculatorProcess("10", visorMock4)
    CalculatorProcess("D", visorMock4)
    CalculatorProcess("C", visorMock4)

    expect(visorMock4.mock.calls[0][0]).toBe("10");
    expect(visorMock4.mock.calls[1][0]).toBe("1");
    expect(visorMock4.mock.calls[2][0]).toBe("");

  });

  const firstDigits = ["S", "+", "-", "/", "%", "*", "="]
  it.each(firstDigits)('is returning empty string for first digits not allowed', (digit) => {

    let visorMock5 = jest.fn()
    CalculatorProcess(digit,visorMock5)
    expect(visorMock5.mock.calls[0][0]).toBe("")
  });
});
