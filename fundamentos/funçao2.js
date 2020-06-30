//Armazenando uma função em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}

console.log(soma(6,6))

//retorno implícito
const subtraçao = (a,b) => a-b
console.log(subtraçao(5,2))

const imprimir2 = a => console.log(a)
imprimir2('Olá')