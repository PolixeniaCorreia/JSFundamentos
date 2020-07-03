function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const compararTV50 = trabalho1 && trabalho2
    // const compararTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const compararTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, compararTV50, compararTV32, manterSaudavel} //forma reduzida de chave e valor
}

console.log (compras(true, true))
console.log(' ')
console.log (compras(true, false))
console.log(' ')
console.log (compras(false, true))
console.log(' ')
console.log (compras(false, false))