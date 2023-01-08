function calculatorScreen(screenId,inputId) {
    return`
    <div id="${screenId}">
        <input type="text" placeholder="0" id="${inputId}">
    </div>
    `;
}
module.exports = calculatorScreen;