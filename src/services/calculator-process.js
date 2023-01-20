visorInteractor  = require("./visor-interactor").visorInteractor;

function calculatorProcess(componentContent) {
if (componentContent !== undefined) {
       visorInteractor(componentContent)
       return componentContent
}

}

exports.calculatorProcess = calculatorProcess;