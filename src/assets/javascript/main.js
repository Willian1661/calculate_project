import "../../assets/main.css"; 
const Button = require("../../components/button");
document.querySelector("#Buttons").insertAdjacentHTML("beforeend", Button());

const inputReuslt = document.querySelector(".js-result");
const patternElements = document.querySelectorAll(".js-btn-pattern");
const ClearAllElement = document.querySelector(".js-btn-ClearAll");
const lessMoreElement = document.querySelector(".js-btn-less-more");
const delElement = document.querySelector(".js-btn-Del");
const equaElement = document.querySelector(".js-btn-equal");

//-------------------- textContent of all buttons-----------------------------//
ClearAllElement.textContent = "C";
lessMoreElement.textContent = "+/-";
delElement.textContent = "«";
equaElement.textContent = "=";
const actions_patterButtons = [
	"%","7","8","9",
	"/","4","5","6",
	"*","1","2","3",
	"+","-",".","0",];

for (let j = 0; j < patternElements.length; j++) {
	patternElements[j].textContent = actions_patterButtons[j];
}

//------------------ for...loop for patter elements -------------------------//
for (let i = 0; i < patternElements.length; i++) {
	if (patternElements[i].classList.contains("js-btn-pattern")) {
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

//----------------------  for the especial elements --------------------------//
ClearAllElement.addEventListener("click", () => inputReuslt.value = "");

lessMoreElement.addEventListener("click", () => {
	if (inputReuslt.value.length === 0 && !Number(lessMoreElement.textContent)) {return;}
	inputReuslt.value = inputReuslt.value * -1;
});

delElement.addEventListener("click", () => inputReuslt.value = inputReuslt.value.slice(0, -1));
	
equaElement.addEventListener("click", () => inputReuslt.value = eval(inputReuslt.value));
