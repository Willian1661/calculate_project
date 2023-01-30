import "../../assets/css/main.css"; 
const calculator = require("../../components/calculator");
const calculatorProcess = require("../../services/calculator-process");
const visorInteractor = require("../../services/visor-interactor");

document.querySelector("body").insertAdjacentHTML("afterbegin",calculator("calculator"));
document.querySelectorAll("#calculator button")
	.forEach(button => button.addEventListener("click", () => calculatorProcess(button.firstChild.dataset.value,visorInteractor)));
