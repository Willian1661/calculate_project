function buttonsGroup(divsId,buttons,htmlClass) {		
	return `
		<div id="${divsId}" class="${htmlClass}">
			${buttons.join("\n\t\t\t")}
		</div>`;
}
module.exports = buttonsGroup;
