import "../../assets/main.css"; 
const buttom = require("./components/buttom");

let btnReuslt = document.querySelector(".js-result");

let buttoms = [
	buttom("C"), buttom("+/-"),buttom("«"),buttom("%"), 
	buttom("7"), buttom("8"),buttom("9"),buttom("/"), 
	buttom("4"), buttom("5"),buttom("6"),buttom("*"), 
	buttom("1"), buttom("2"),buttom("3"),buttom("+"),
	buttom("."), buttom("-"),buttom("0"),buttom("=")
];

for (let i = 0; i < buttoms.length; i++) {
	
	document.querySelector("#buttoms").insertAdjacentHTML("beforeend", buttoms[i]);
	
	const elementPattern = document.querySelectorAll("button");
	
	elementPattern[i].classList.add("js-btn-pattern");
	
	//-----------------------// for initial/bottom Buttons //-----------------------//
	if (elementPattern[i].classList !== "js-btn-pattern") {

		switch (elementPattern[i].textContent) {
		case "C":{
			elementPattern[i].classList.add("js-btn-iniciais");
			elementPattern[i].classList.replace("js-btn-pattern","js-btn-ClearAll");
			let initialElementClearAll = document.querySelector(".js-btn-iniciais.js-btn-ClearAll");
			initialElementClearAll.addEventListener("click", () =>{
				btnReuslt.value = "";
			});
			break;
		}
		case "+/-":{
			elementPattern[i].classList.add("js-btn-iniciais");
			elementPattern[i].classList.replace("js-btn-pattern","js-btn-less-more");
			let initialElementLessMore = document.querySelector(".js-btn-iniciais.js-btn-less-more");
			initialElementLessMore.addEventListener("click", () =>{
				btnReuslt.value = btnReuslt.value * -1;
			});
			break;
		}
		case "«":{
			elementPattern[i].classList.add("js-btn-iniciais");
			elementPattern[i].classList.replace("js-btn-pattern","js-btn-Del");
			let initialElementDell = document.querySelector(".js-btn-iniciais.js-btn-Del");
			initialElementDell.addEventListener("click", () =>{
				btnReuslt.value = btnReuslt.value.slice(0,-1);
			});
			break;
		}			
		case "=":{
			elementPattern[i].classList.add("js-btn-bottom");
			elementPattern[i].classList.replace("js-btn-pattern","js-btn-equal");
			let elementEqual = document.querySelector(".js-btn-equal.js-btn-bottom");
			elementEqual.addEventListener("click", () => {	
				try {
					btnReuslt.value = eval(btnReuslt.value);
				} catch (error) {
					console.log(error.Message);
				}
			});
			break;
		}			
		}
	}

	//-----------------------// for pattern Buttons //-----------------------//
	if (elementPattern[i].classList == "js-btn-pattern") {
	
		elementPattern[i].addEventListener("click", () => {

			let lastValueTyped = btnReuslt.value[btnReuslt.value.length - 1];
			if (lastValueTyped &&
	!Number(lastValueTyped) &&
	!Number(elementPattern[i].textContent) &&
	lastValueTyped !== 0 &&
	elementPattern[i].textContent !== 0
			) {
				btnReuslt.value = btnReuslt.value.slice(0, -1);
			}

			if (btnReuslt.value.length === 0 && !Number(elementPattern[i].textContent)) {
				return;
			}
			btnReuslt.value += elementPattern[i].textContent;
			console.log(elementPattern[i].textContent);
		});
		if (elementPattern[i].textContent == "%") {
			elementPattern[i].classList.add("js-btn-iniciais");
		}else if (elementPattern[i].textContent == "." ||
elementPattern[i].textContent == "-" ||
elementPattern[i].textContent == "0") {
			elementPattern[i].classList.add("js-btn-bottom");
		}
	}
}
