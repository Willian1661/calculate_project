function buttonsGroup(buttonsId,buttons) {		
	return `
		<div id="${buttonsId}">
			${buttons.join("\n\t\t\t")}
		</div>`;
}
module.exports = buttonsGroup;
