const visorInteractor  = require("./visor-interactor");

function calculatorProcess(componentContent) {
if (componentContent !== undefined) {
       visorInteractor(componentContent)
       return componentContent
}
return componentContent

}

module.exports = calculatorProcess