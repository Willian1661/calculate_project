const calculatorProcess = require("../../src/services/calculator-process")
const visorInteractor = require("../../src/services/visor-interactor")

describe("button's content is passing", ()=>{


  
  it("has passed process's content into view", ()=>{
    
    const process = calculatorProcess("1")
    expect(visorInteractor(process)).toBe(true)

  })
})