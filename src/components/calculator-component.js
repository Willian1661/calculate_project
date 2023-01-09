function calculator(id,buttons) {
    return`
    <div id="${id}">
        <div id="screen">
            <input type="text" placeholder="0" id="input-screen-id">
        </div>
        <div id="buttons-dIv-id">
            ${buttons.join('\n\t\t\t')}}
        </div>
    </div>
    `;
}
module.exports = calculator;