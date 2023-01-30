function button(textContent,dataValue,htmlClass) {
	if (dataValue == undefined) {
	
		return `<button class="button ${htmlClass}">${textContent}</button>`;
	
	}

	return `<button class="button ${htmlClass}" data-value="${dataValue}">${textContent}</button>`;
	
}
module.exports = button;
