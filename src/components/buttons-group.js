function buttonsGroup(buttonsId,buttons,htmlClass) {		
	if (htmlClass == undefined) {
		return `
		<div id="${buttonsId}">
			${buttons.join("\n\t\t\t")}
		</div>`;
	}
	return `
		<div id="${buttonsId}" class="${htmlClass}">
			${buttons.join("\n\t\t\t")}
		</div>`;
}
module.exports = buttonsGroup;
