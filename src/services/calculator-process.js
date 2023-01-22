let memory = [];
function calculatorProcess(content,visor) {

const numbersOperators = (operator) => {
	return String(
		eval(
			(memory[0]+memory[1])
			+ operator +
			(memory[3]+memory[4])
		));
}

	memory += content;

	if (memory.includes("=")) {
	if (memory.includes("+")) {
			memory = numbersOperators("+")
	}

	if (memory.includes("-")) {
			memory = numbersOperators("-")
	}

	if (memory.includes("*")) {
			memory = numbersOperators("*")
	}

	if (memory.includes("/")) {
			memory = numbersOperators("/")
	}

	if (memory.includes("%")) {
			memory =
    String(eval((memory[0]+memory[1]))*("0.0"+memory[3]));
	}
}

	if (memory.includes("C")) {
		memory = "";
	}

	if (memory.includes("+/-")) {
		memory = String(eval((memory[0])*-1));
	}

	if (memory.includes("Del")) {
		memory = memory.slice(0,-(memory.length - 1)); 
	}

	visor(memory);


	return console.log(memory);
}

module.exports = calculatorProcess;
