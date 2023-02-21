let memory = "";
let sLenth = 0;

function CalculatorProcess(content, visor) {
	const PLUS_MINUS_SIGNAL = "S";
	const convertion = (string) => String(eval(string))
	const firstInterations = ["S", "+", "-", "/", "%", "*", "="];

	memory += content

	firstInterations.forEach(interation => {
		if (memory.includes(interation) && memory.length < 2) {
			memory = ""
		}
	});
	
	if (memory.includes("=")) {
		memory = memory.slice(0, -1)

		if (memory.includes("%")) {
			memory = memory.replace("%", "/100*")
		}
		memory = convertion(memory)
	}

	if (memory.includes("C")) {
		memory = ""
	}
	
	if (memory.includes(PLUS_MINUS_SIGNAL)) {
		sLenth = memory.match(/S/g).length

		memory = memory.slice(0, -sLenth)

		memory = memory = convertion(memory*-1)
	}
	if (memory.includes("D")) {

		memory = memory.slice(0, -2)
	}
	visor(memory)
}
module.exports = CalculatorProcess;