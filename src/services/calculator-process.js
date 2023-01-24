let memory = [];
let result = ""
function calculatorProcess(content,visor) {
	
	const numbersOperators = () => String(eval((result)));
	
	memory += content;

	if (memory.includes("=")) {

		result = memory.slice(0,-1)

		if (memory.includes("+")) {
			memory = numbersOperators();
		}

		if (memory.includes("-")) {
			memory = numbersOperators();
		}

		if (memory.includes("*")) {
			memory = numbersOperators();
		}

		if (memory.includes("/")) {
			memory = numbersOperators();
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


	console.log(memory);
}

module.exports = calculatorProcess;
