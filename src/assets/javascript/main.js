import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../../components/Calculator";
import "../../assets/css/custom.scss";

const calculatorProcess = require("../../services/calculator-process");
const visorInteractor = require("../../services/visor-interactor");

ReactDOM.render(

	<Calculator id="calculator" />,document.querySelector("body")

	) 
document.querySelectorAll("#calculator button")
	.forEach(button => button.addEventListener("click", () => calculatorProcess(button.dataset.value,visorInteractor) ));
