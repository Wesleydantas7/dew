const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

const campoNome = document.querySelector("#nome");
console.log(campoNome);

const campoNotaUM = document.querySelector("#notaUm");
console.log(campoNotaUM);

const campoNotaDois = document.querySelector("#notaDois");
console.log(campoNotaDois);

const resultados = document.querySelector("#resultados");
console.log(resultados);

const botaoCaulcularMedia = document.querySelector("#btnCalcular");
console.log("botaoCalcularMedia", botaoCaulcularMedia); 

let mediaCaulculada = 0;

let aprovado = false;

let mensagemFinal = ("...")

function caulcularMedia(notaUm, notaDois) {
    return(notaUm + notaDois)/ 2; 
}

function verificarAprovacao(mediaCaulculada) {

    if(mediaCaulculada >=6){
        return true;
    }
    return false;
}

function mensagemAprovacao(aprovacao) {

    if(aprovado) {
        return "Aprovado"
    }
    return "Reprovado"

} 



botaoCaulcularMedia.addEventListener("click", function() {

    const valorNotaUm = Number(campoNotaUM.value)
    console.log(valorNotaUm);

    const valorNotaDois = Number(campoNotaDois.value)
    console.log(valorNotaDois);

    mediaCaulculada = caulcularMedia(valorNotaUm, valorNotaDois);

    aprovado = verificarAprovacao(mediaCaulculada); 

    console.log("mediaCalculada:", mediaCaulculada);

    console.log("aprovacao", aprovado);

    mensagemFinal = mensagemAprovacao(aprovado);

    console.log("mensagemAprovacao", mensagemAprovacao(aprovado));

    resultados.textContent = mensagemFinal


})