jest.mock("../../src/services/visor-interactor")
const calculatorProcess = require("../../src/services/calculator-process")
const visorInteractor = require("../../src/services/visor-interactor")

describe("button's content is passing", () => {
  
  it("has passed process's content into view", () => {

    expect(calculatorProcess("1")).toBe("1");

    expect(visorInteractor).toHaveBeenCalledTimes(1);
  });
});

