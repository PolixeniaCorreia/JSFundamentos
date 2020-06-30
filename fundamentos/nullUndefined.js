let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) //nao pode usar '.toString' se o valor está null ou undefined.

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.65
console.log(produto)
delete produto.preço
console.log(produto)

produto.preço = null 
console.log(!!produto.preço)
console.log(produto)