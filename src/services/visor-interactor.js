function visorInteractor(textContent) {

	console.log(textContent);
const inputReuslt = document.getElementById("calculator-screen")
inputReuslt.value = textContent
/* 
let lastValueTyped = inputReuslt.value[inputReuslt.value.length - 1];
if (lastValueTyped &&
	Number(lastValueTyped) &&
	Number(textContent) &&
	lastValueTyped !== "0" &&
	textContent !== "0"
			) {
				inputReuslt.value = inputReuslt.value.slice(0, -inputReuslt.length);
			}

			if (inputReuslt.value.length === 0 && !Number(textContent)) {
				return;
			}
			inputReuslt.value += textContent; */
		}
module.exports = visorInteractor;
