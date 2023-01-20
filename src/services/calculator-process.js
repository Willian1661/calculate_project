const button = require("../components/button");

function calculatorProcess(componentContent) {
if (componentContent == "+") {
       let buttonContent = componentContent.replace("+","plus")
       let especialButton = button(`${buttonContent}`)
return especialButton.match(`${buttonContent}`)
}
       const especialButton = button(`${componentContent}`)
return especialButton.match(`${componentContent}`)
}

module.exports = calculatorProcess;