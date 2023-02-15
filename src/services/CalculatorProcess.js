let memory = "";
let sLength;

function CalculatorProcess(content, visor) {

	const firstInteraction = ["%", "/", "*", "+", "-", "S", "C", "="];

	memory += content;

	if ((firstInteraction.includes(memory[0]) && memory.length < 2) || memory.includes("C")) {
		memory = "";

	}
	
	if (memory[0] == ".") {
		memory = "0.";
	}

	if (memory.includes("=")) {

		memory = memory.slice(0, -1);

		if (memory.includes("%")) {
			memory =
				String(eval(memory.replace(/[%]/g, "/100*")));
		}

		memory = String(eval(memory));
	}

	if (memory.includes("S")) { //S means Signal for change number's signal

		sLength = memory.match(/S/g).length;

		memory = memory.slice(0, -sLength);

		for (let i = 0; i < sLength; i++) {
			memory = String(eval(memory * -1));

		}
	}

	if (memory.includes("D")) {
		memory = memory.slice(0, -2);
	}

	visor(memory);
}

module.exports = CalculatorProcess;
