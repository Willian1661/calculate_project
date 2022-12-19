import _ from 'lodash';
import './main.css'; 


let btnReuslt = document.querySelector(".js-result")
let btnMaMe = document.querySelector(".js-btn-ma-me")
let btnClearAll = document.querySelector(".js-btn-AC")
let btnDelete = document.querySelector(".js-btn-DEL")
let btnPadrões = document.querySelectorAll(".js-btn-padroes")
let btnEqual = document.querySelector(".js-btn-equal")

function executarCalculo() {
    try {
        btnReuslt.value = eval(btnReuslt.value);
    } catch (error) {
        alert("algo deu errado:(\n erro na linha 34");
    }
}
function limparResultado() {
    btnReuslt.value = "";
}
function trocarSinais() {
    if (Number(btnReuslt.value)) {
        btnReuslt.value = btnReuslt.value * -1;
    }
}
function deletarcalculo() {
    btnReuslt.value = btnReuslt.value.slice(0, -1);
}

function AdicionarElementoAoInputResultado(numeroDigitado) {
    let ultimoValorNoInputDigitado = btnReuslt.value[btnReuslt.value.length - 1];
    if (ultimoValorNoInputDigitado &&
        !Number(ultimoValorNoInputDigitado) &&
        !Number(numeroDigitado) &&
        ultimoValorNoInputDigitado != 0 &&
        numeroDigitado != 0
    ) {
        deletarcalculo();
    }

    if (btnReuslt.value.length == 0 && !Number(numeroDigitado)) {
        return;
    }
    btnReuslt.value += numeroDigitado;
}

function gerenciador() {

    btnPadrões.forEach((elementcorrente) => {
        elementcorrente.addEventListener('click', () => {
            let valorDoElementoClickado = elementcorrente.dataset.valor;

            AdicionarElementoAoInputResultado(valorDoElementoClickado);
        });
    });

    btnEqual.addEventListener('click', () => {
        executarCalculo();
    });
    btnClearAll.addEventListener('click', () => {
        limparResultado();
    });
    btnMaMe.addEventListener('click', () => {
        trocarSinais();
    });
    btnDelete.addEventListener('click', () => {
        deletarcalculo();
    });
}
gerenciador();

function export_test(){
    console.log("export_test");
}
export default export_test