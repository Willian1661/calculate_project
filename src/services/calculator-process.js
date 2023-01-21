let memory2 = [];
function calculatorProcess(content,visor) {
       
	memory2 += content;

	if (memory2.includes("=")) {
		if (memory2.includes("+")) {
			memory2 =
                     String(Number((memory2[0]+memory2[1]))
                            +
                            Number((memory2[3]+memory2[4])
                            )
                     );
		}
	}

	if (memory2.includes("C")) {
		memory2 = [];
		visor(memory2);
		return;
	}

	if (memory2.includes("+/-")) {
		memory2 = String(Number((memory2[0])*-1));
	}

	if (memory2.includes("D")) {
		memory2 = memory2.slice(0,-2); 
		console.log(memory2 + "hit Del");
	}

	visor(memory2);


	return console.log(memory2);
}

module.exports = calculatorProcess;
