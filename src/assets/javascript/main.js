import "../../assets/main.css"; 
const button = require("../../components/button");
const inputReuslt = document.querySelector(".js-result");

//-------------------- textContent of all buttons-----------------------------//

const buttonComponents = [
	button("C","js-clearAll","js-upper"),button("+/-","js-lessMore","js-upper"),button("«","js-del","js-upper"),button("%","js-buttons","js-upper"),
	button("7","js-buttons",""),button("8","js-buttons",""),button("9","js-buttons",""),button("/","js-buttons",""),
	button("4","js-buttons",""),button("5","js-buttons",""),button("6","js-buttons",""),button("*","js-buttons",""),
	button("1","js-buttons",""),button("2","js-buttons",""),button("3","js-buttons",""),button("+","js-buttons",""),
	button("0","js-buttons","js-bottom"),button(".","js-buttons","js-bottom"),button("=","js-equal","js-bottom"),button("-","js-buttons","js-bottom"),
];

//------------------ for...loop for patter elements -------------------------//

for (let i = 0; i < buttonComponents.length; i++) {
	
	document.querySelector("#jsButtons").insertAdjacentHTML("beforeend", buttonComponents[i]);
	const buttonElements = document.querySelectorAll(".js-buttons, .js-clearAll, .js-lessMore, .js-del, .js-equal");

	if (buttonElements[i].innerText != "C" &&
	buttonElements[i].innerText != "+/-" &&
	buttonElements[i].innerText != "«" &&
	buttonElements[i].innerText != "="
) {
		buttonElements[i].addEventListener("click", () => {
			let lastValueTyped = inputReuslt.value[inputReuslt.value.length - 1];
			if (lastValueTyped &&
	!Number(lastValueTyped) &&
	!Number(buttonElements[i].textContent) &&
	lastValueTyped !== "0" &&
	buttonElements[i].textContent !== "0"
			) {
				inputReuslt.value = inputReuslt.value.slice(0, -1);
			}

			if (inputReuslt.value.length === 0 && !Number(buttonElements[i].textContent)) {
				return;
			}
			inputReuslt.value += buttonElements[i].textContent;
		});
	}
}

//----------------------  for the especial elements --------------------------//

const clearAllElement = document.querySelector(".js-clearAll")
const lessMoreElement = document.querySelector(".js-lessMore")
const delElement = document.querySelector(".js-del")
const equalElement = document.querySelector(".js-equal")


clearAllElement.addEventListener("click",() =>{
	inputReuslt.value = "";
})
lessMoreElement.addEventListener("click",() =>{
	inputReuslt.value = inputReuslt.value * -1;
})
delElement.addEventListener("click",() =>{
	inputReuslt.value = inputReuslt.value.slice(0,-1)
})
equalElement.addEventListener("click",() =>{
	inputReuslt.value = eval(inputReuslt.value)
})