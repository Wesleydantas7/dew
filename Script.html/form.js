const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

const campoNome = document.querySelector("#nome");
console.log(campoNome);

const campoNotaUM = document.querySelector("#notaUm");
console.log(campoNotaUM);

const campoNotaDois = document.querySelector("#notaDois");
console.log(campoNotadois);

const resultados = document.querySelector("#resultados");
console.log(resultados);

const botaoCaulcularMedia = document.querySelector("#btnCaulcular");
console.log(botaoCaulcularMedia); 

let mediaCaulculada = 0;

let aprovado = false;

let mensagemFinal = ("...")

function caulcularMedia() {
    return(1 + 2)/ 2;
}

function verificarAprovacao(mediaCaulculada) {

    if(mediaCaulculada >=6){
        return true;
    }
    return false;
}


botaoCaulcularMedia.addEventListener("click", function() {

    const valorNotaUm = Number(campoNotaUM.value)
    console.log(valorNotaUm);

    const valorNotaDois = Number(campoNotaDois.value)
    console.log(valorNotaDois);

    mediaCaulculada = caulcularMedia(valorNotaUm, valorNotaDois);

    aprovado = verificarAprovacao(mediaCaulculada); 

    console.log("mediaCalculada:", mediaCaulculada);

    console.log("aprovacao", aprovacao);

    mensagemFinal = mensagemAprovacao(aprovacao);

    console.log("mensagemAprovacao", mensagemAprovacao(aprovacao));

    resultados.textContent = mensagemFinal


})