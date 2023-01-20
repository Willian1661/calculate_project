calculatorProcess = require("../../src/services/calculator-process").calculatorProcess
visorInteractor = require("../../src/services/visor-interactor").visorInteractor

visorInteractor = jest.fn()

describe("button's content is passing", () => {

  it("has passed process's content into view", () => {

    expect(calculatorProcess("1")).toBe("1");

    expect(visorInteractor).toHaveBeenCalledTimes(1);
  });
});
