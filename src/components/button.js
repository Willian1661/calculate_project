function button(textContent,htmlClass,dataValue) {

	return `<button class="button ${htmlClass}" data-value="${dataValue}">${textContent}</button>`;
		
}
module.exports = button;
