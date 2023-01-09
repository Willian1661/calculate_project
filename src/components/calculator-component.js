function calculator(id) {
    return`
    <div id="${id}">
        <div id="screen">
            <input type="text" placeholder="0" id="input-screen-id">
        </div>
        <div id="buttons-dIv-id">
            <button class="buttons-class">buttons-content</button>
            <button class="buttons-class">buttons-content</button>
        </div>
    </div>
    `;
}
module.exports = calculator;