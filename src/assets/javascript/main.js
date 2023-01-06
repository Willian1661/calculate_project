import "../../assets/css/main.css"; 
const button = require("../../components/button");
const inputReuslt = document.querySelector(".input-result");

document.querySelector(".calc_body").insertAdjacentHTML("beforeend",button("buttons","button"))

const clearAllElement = document.querySelector(".clear-all")
const lessMoreElement = document.querySelector(".less-more")
const delElement = document.querySelector(".del")
const equalElement = document.querySelector(".equal")
const buttons = document.querySelectorAll(".button");

//------------------ for...loop for buttons elements -------------------------//

for (let i = 0; i < buttons.length; i++) {

		buttons[i].addEventListener("click", () => {
			let lastValueTyped = inputReuslt.value[inputReuslt.value.length - 1];
			if (lastValueTyped &&
	!Number(lastValueTyped) &&
	!Number(buttons[i].textContent) &&
	lastValueTyped !== "0" &&
	buttons[i].textContent !== "0"
			) {
				inputReuslt.value = inputReuslt.value.slice(0, -1);
			}

			if (inputReuslt.value.length === 0 && !Number(buttons[i].textContent)) {
				return;
			}
			inputReuslt.value += buttons[i].textContent;
		})
	}
	
//----------------------  especial button elements --------------------------//

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


