const calculatorProcess = require("../../src/services/calculator-process")
const visorInteractor = require("../../src/services/visor-interactor")

describe("click test", ()=>{


  const resolution = [
  calculatorProcess("1"),
  calculatorProcess("+"),
  calculatorProcess("1"),
  calculatorProcess("="),
]
let visor = ""
let soma = 0
it("'s working click event", ()=>{

for (let i = 0; i < resolution.length; i++) {

visor += resolution[i] + " "

/* if (resolution[i].includes("plus")) {
  let result = Number(resolution[0]) + Number(resolution[2])
  soma += result
}

if (resolution[i].includes("=")) {
} */
    expect(visorInteractor(visor)).toMatchSnapshot()
    
    }  
  })
})