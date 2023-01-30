function buttonsGroup(divsId,buttons) {		
	return `
		<div id="${divsId}">
			${buttons.join("\n\t\t\t")}
		</div>`;
}
module.exports = buttonsGroup;
