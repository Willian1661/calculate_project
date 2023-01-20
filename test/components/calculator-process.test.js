const calculatorProcess = require("../../src/services/calculator-process")
const visorInteractor = require("../../src/services/visor-interactor")

describe("button's content is passing", ()=>{


const process = calculatorProcess("1")

it("has passed process's content into view", ()=>{

    expect(visorInteractor(process)).toBe("1")

  })
})