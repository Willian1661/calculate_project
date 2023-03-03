let memory = "", process = "";

function CalculatorProcess(content, visor) {
	const PLUS_MINUS_SIGNAL = "S";
	const convertion = (string) => String(eval(string));
	const firstInterations = [PLUS_MINUS_SIGNAL, "+", "-", "/", "%", "*", "="];
	const clear = () => process = memory = "";

	process = memory += content;

	if (firstInterations.includes(memory) || content === "C") {
		clear();
	}

	if (process.includes("%")) {
		process = process.replace("%", "/100*");
	}

	if (process.includes("=")) {

		memory = convertion(process.slice(0, -1));
	}

	if (process.includes(PLUS_MINUS_SIGNAL)) {

		process = process.slice(0, -1);

		memory = convertion(process * -1);
	}

	if (content === "D") {

		memory = process.slice(0, -2);
	}

	visor(memory);
}
module.exports = CalculatorProcess;
