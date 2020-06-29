let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log('O negativo de 1 é:', !isAtivo)
console.log('O valor original de 1 é:',!!isAtivo) //Para conhecer seu valor de origem é v ou f .

console.log('Resolve para verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Resolve para falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'João'
console.log(nome || 'Desconhecido')