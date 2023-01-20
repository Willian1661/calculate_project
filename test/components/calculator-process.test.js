const calculatorProcess = require("../../src/services/calculator-process")
const visorInteractor = require("../../src/services/visor-interactor")

describe("button's content is passing", ()=>{


  const resolution = [
  calculatorProcess("1"),
  calculatorProcess("+"),
  calculatorProcess("1"),
  calculatorProcess("=")
]

let view = ""

it("has passed process's content into view", ()=>{

for (let i = 0; i < resolution.length; i++) {

view += resolution[i]

if (resolution[i].includes("plus") && resolution[i].includes("=")) {

  let result = Number(resolution[0]) + Number(resolution[2])

  view = result

}

    expect(visorInteractor(view)).toBe(view)
    }  
  })
})