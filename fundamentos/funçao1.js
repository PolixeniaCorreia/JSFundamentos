// Função sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(5,5)
imprimirSoma(2)
imprimirSoma(2,5,6,9,8)
imprimirSoma()

//Função com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,6))
console.log(soma(2))