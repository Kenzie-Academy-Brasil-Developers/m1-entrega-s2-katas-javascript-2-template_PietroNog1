//1
function add(a, b){
    return a + b;
}
console.log(add(2,4));


//2
function multiply(a, b){
    let resposta = 0;
    for(var i = 1;i <= b; i++){
        resposta = add(resposta,a)
    }
   return resposta
}
console.log(multiply(6,8))



function power(a, b){
    let resultado = 1;
    if( b == 0){
        return 1;  
    }
    for(let i = 1; i <= b; i++){
        resultado = multiply(resultado,a)
    }
    return resultado
}        
console.log(power(2,8))

//3
/*function power(a , b){
    if (b == 0)
        return 1;
         
    var resposta = a;
    var incremento = a;     
    for (i = 1; i < b; i++){
        for (j = 1; j < a; j++){
            resposta += incremento;
        }
        incremento = resposta;
    }
    return resposta;
}

console.log(power(2,8))*/

//4
function factorial(expoente){
    let resultado = 1;
    let contador = expoente;
    for(let i = 1; i < expoente; i++){
        resultado = multiply(contador, expoente - i);
        contador = resultado;
    }
    return resultado;
}
console.log(factorial(4));

//4
/*function factorial(expoente){
    if (expoente === 0 || expoente === 1)
    return 1;
    for (var i = expoente - 1; i >= 1; i--){
        expoente *= i;
    }
    return expoente;
}
console.log(factorial(4));*/