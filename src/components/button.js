function button(textContent,htmlClass) {
	if (htmlClass === undefined) {
		return `<button class="button">${textContent}</button>`;
	}
	
	return `<button class="${htmlClass}">${textContent}</button>`;
	
}
module.exports = button;
