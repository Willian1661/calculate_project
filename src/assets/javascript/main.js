import "../../assets/css/main.css"; 
const calculator = require("../../components/calculator")

document.querySelector("body").insertAdjacentHTML("afterbegin",calculator("calculator"));
// const inputReuslt = document.getElementById("calculator-screen")

/* const buttonsElement = [
	button("C","clear-all upper left"),button("+/-","less-more upper"),button("CE","del upper"),button("%","upper right"),
	button("7","left"),button("8"),button("9"),button("/","right"),
	button("4","left"),button("5"),button("6"),button("*","right"),
	button("1","left"),button("2"),button("3"),button("+","right"),
	button("0","bottom left"),button(".","bottom"),button("=","equal bottom"),button("-","bottom right"),
]; */
//------------------ for...loop for buttons elements -------------------------//


// const buttons = document.querySelectorAll("button");
	/* 
	if (buttons[i].innerText !== "C" && 
	buttons[i].innerText !== "+/-" && 
	buttons[i].innerText !== "CE" && 
	buttons[i].innerText !== "=") {
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
		});
	} */

	
//----------------------  especial button elements --------------------------//
/* 
const clearAllElement = document.querySelector(".clear-all");
const lessMoreElement = document.querySelector(".less-more");
const delElement = document.querySelector(".del");
const equalElement = document.querySelector(".equal");

clearAllElement.addEventListener("click",() =>{
	inputReuslt.value = "";
});
lessMoreElement.addEventListener("click",() =>{
	inputReuslt.value = inputReuslt.value * -1;
});
delElement.addEventListener("click",() =>{
	inputReuslt.value = inputReuslt.value.slice(0,-1);
});
equalElement.addEventListener("click",() =>{
	inputReuslt.value = eval(inputReuslt.value);
});
 */