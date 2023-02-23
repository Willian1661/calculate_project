let memory = "", process = "";
let sLenth = 0;

function CalculatorProcess(content, visor) {
	const PLUS_MINUS_SIGNAL = "S";
	const convertion = (string) => String(eval(string))
	const firstInterations = ["S", "+", "-", "/", "%", "*", "="];
	const clear = () => process = memory = "";

	memory += content

	if (firstInterations.includes(memory) && memory.length < 2 || content === "C") {
		clear();
	}

	if (memory.includes("=")) {
		process = memory.slice(0, -1)

		if (memory.includes("%")) {
			process = process.replace("%", "/100*")
		}

		memory = convertion(process)
	}

	if (memory.includes(PLUS_MINUS_SIGNAL)) {
		sLenth = memory.match(/S/g).length

		memory = memory.slice(0, -sLenth)

		memory = convertion(memory * -1)
	}

	if (content === "D") {

		memory = memory.slice(0, -2)
	}

	visor(memory)
}
module.exports = CalculatorProcess;