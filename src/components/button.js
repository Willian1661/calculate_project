function button(textContent,htmlClass,cssClass) {

	return `<button class="${htmlClass} ${cssClass}">${textContent}</button>`;
}
module.exports = button;
