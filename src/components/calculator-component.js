const button = require("../../src/components/button")
function calculator(id) {
    return`
    <div id="${id}">
        <div id="screen">
            <input type="text" placeholder="0" id="input-screen-id">
        </div>
        <div id="buttons-dIv-id">
        ${button("C","clear-all upper left")}
        ${button("+/-","less-more upper")}
        ${button("CE","del upper")}
        ${button("%","upper right")}
        ${button("7","left")}
        ${button("8")}
        ${button("9")}
        ${button("/","right")}
        ${button("4","left")}
        ${button("5")}
        ${button("6")}
        ${button("*","right")}
        ${button("1","left")}
        ${button("2")}
        ${button("3")}
        ${button("+","right")}
        ${button("0","bottom left")}
        ${button(".","bottom")}
        ${button("=","equal bottom")}
        ${button("-","bottom right")}
        </div>
    </div>
    `;
}
module.exports = calculator;