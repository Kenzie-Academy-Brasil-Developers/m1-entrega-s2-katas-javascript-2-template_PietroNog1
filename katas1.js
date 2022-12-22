/*1*/

function cubo10(){
    for(let i = 1; i<=10; i++){
        let cubos = i * i * i;
            console.log(cubos);
    }
}
cubo10();


/*2*/

function divisiveisPor(limite, divisor){

    var numerosDiv = [];

    for(let i = 1; i <= limite; i++){
        if(i % divisor == 0){
            numerosDiv.push(i);
        }
    }
    return numerosDiv;
}
console.log(divisiveisPor(100, 10));


/*3*/

function posicaoLetra(palavra, numero){

    for(let i = 0; i<palavra.length; i++) {
        if(i == numero){
            return(palavra[i]);

        }
    }
}
console.log(posicaoLetra('Algoritimo', 7))

/*4*/

function palavraRecortada(palavra, numero) {
    let variavelnova = "";
    for(let i = 0; i < numero; i++) {
        variavelnova = variavelnova + palavra[i];
    }
    return variavelnova;
}
console.log(palavraRecortada("Algoritmos", 4));


/*5*/

function palavraResto(palavra, numero) {
    let variavelnova = "";
    for(let i = numero; i <= palavra.length; i++) {
      variavelnova = variavelnova + palavra[1]; 
    }
    return variavelnova;
}
console.log(palavraResto("Algoritimo",2));

/*6*/

function contaVogais(palavra) {
    let contador = 0;
    for(let i = 0; i <= palavra.length; i++){
        if(palavra[i] == "a" || palavra[i] =="e" || palavra[i] == "i" || palavra[i] == "o" || palavra[i] == "u" ) {
            contador ++;
        }

    }
    return contador;
}
console.log(contaVogais("abacaxi"));


/*7*/

 function textoDeTrasParaFrente(abacaxi){

    let resultado = "";

     for(let i = abacaxi.length - 1; i >= 0; i--){
         resultado += abacaxi[i];
     }
     return resultado;
 }
 console.log(textoDeTrasParaFrente("abacaxi"));


/*8*/

function  removeEspacos(texto){

    let remove = "";

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] !== ' '){
            remove = texto[i];
        }
    }
    return remove;
}
console.log(removeEspacos("Não restará     espaços em branco"));

/*9*/

texto = "UMA FRASE ULTRA SECRETA QUE PRECISA SER CRIPTOGRAFADA";
let posicao = "";
function textoCriptografado() {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "A") {
            posicao += "X";
        } else if (texto[i] === "E") {
            posicao += "Y";
        } else if (texto[i] === "I") {
            posicao += "W";
        } else if (texto[i] === "O") {
            posicao += "K";
        } else if (texto[i] === "U") {
            posicao += "Z";
        } else {
            posicao += texto[i];
        }
    }
}
textoCriptografado(texto);
console.log("Texto original: "+ texto);
console.log("Texto da posição: " + posicao);