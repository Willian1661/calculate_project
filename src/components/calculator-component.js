function calculator(bodyId,screenId,inputId,buttonsGroup) {
    return`
    <div id="${bodyId}">
        <div id="${screenId}">
            <input type="text" placeholder="0" id="${inputId}">
        </div>
            ${buttonsGroup}
    </div>
    `;
}
module.exports = calculator;