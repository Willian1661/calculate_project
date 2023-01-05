import "../../assets/main.css"; 
const Button = require("../../components/button");
const inputReuslt = document.querySelector(".js-result");

//-------------------- textContent of all buttons-----------------------------//
const buttonElements = [
	Button("C"),Button("+/-"),Button("«"),Button("%"),
	Button("7"),Button("8"),Button("9"),Button("/"),
	Button("4"),Button("5"),Button("6"),Button("*"),
	Button("1"),Button("2"),Button("3"),Button("+"),
	Button("-"),Button("."),Button("0"),Button("="),
];

for (let i = 0; i < buttonElements.length; i++) {
	
	document.querySelector("#Buttons").insertAdjacentHTML("beforeend", buttonElements[i]);
	const patternElements = document.querySelectorAll(".js-buttons");
	
	//----------------------  for the especial elements --------------------------//

	if(patternElements[i].innerText === "C"){
		patternElements[i].addEventListener("click", () => {
			inputReuslt.value = "";
		});
	}
	if(patternElements[i].innerText === "+/-"){
		patternElements[i].addEventListener("click", () => {
			inputReuslt.value = inputReuslt.value * -1;});
	}
	if(patternElements[i].innerText === "«"){
		patternElements[i].addEventListener("click", () => {
			inputReuslt.value = inputReuslt.value.slice(0,-1);});
	}
	if(patternElements[i].innerText === "="){
		patternElements[i].addEventListener("click", () => {
			inputReuslt.value = eval(inputReuslt.value);});
	}

	//------------------ for...loop for patter elements -------------------------//

	if (patternElements[i].innerText !== "C" &&
patternElements[i].innerText !== "+/-" &&
patternElements[i].innerText !== "«"  &&
patternElements[i].innerText !== "=") 
	{
		patternElements[i].addEventListener("click", () => {
			let lastValueTyped = inputReuslt.value[inputReuslt.value.length - 1];
			if (lastValueTyped &&
	!Number(lastValueTyped) &&
	!Number(patternElements[i].textContent) &&
	lastValueTyped !== "0" &&
	patternElements[i].textContent !== "0"
			) {
				inputReuslt.value = inputReuslt.value.slice(0, -1);
			}

			if (inputReuslt.value.length === 0 && !Number(patternElements[i].textContent)) {
				return;
			}
			inputReuslt.value += patternElements[i].textContent;
		});
	}
}
	
