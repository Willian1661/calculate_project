function button(identifierDiv,identifierButton) {

	return `
	<div id="${identifierDiv}">
	<button class="clear-all">C</button>
	<button class="less-more">+/-</button>
	<button class="del">CE</button>
	<button class="${identifierButton}">%</button>
	<button class="${identifierButton}">7</button>
	<button class="${identifierButton}">8</button>
	<button class="${identifierButton}">9</button>
	<button class="${identifierButton}">/</button>
	<button class="${identifierButton}">4</button>
	<button class="${identifierButton}">5</button>
	<button class="${identifierButton}">6</button>
	<button class="${identifierButton}">*</button>
	<button class="${identifierButton}">1</button>
	<button class="${identifierButton}">2</button>
	<button class="${identifierButton}">3</button>
	<button class="${identifierButton}">+</button>
	<button class="${identifierButton}">0</button>
	<button class="${identifierButton}">.</button>
	<button class="equal">=</button>
	<button class="${identifierButton}">-</button>
	</div>
	`;
}
module.exports = button;
