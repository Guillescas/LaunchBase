console.log("")
const usuarios = [
    {nome: 'Tutantan', receitas: [115.3, 48.7, 98.3, 14.5, 12], despesas: [85.3, 13.5, 19.9]},
    {nome: 'Marcio', receitas: [24.6, 214.3, 45.3], despesas: [185.3, 12.1, 120.0]},
    {nome: 'Lucia', receitas: [9.8, 120.3, 340.2, 45.3], despesas: [450.2, 29.9]}
]

function somaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i]
        soma = soma + numero
    }
    return soma
}

function calculaSaldo(receitas, despesas) {
    const somaReceita = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    const saldo = somaReceita - somaDespesas
    return saldo.toFixed(2)
}

for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i]
    const saldoFinal = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldoFinal > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de R$ ${saldoFinal}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de R$ ${saldoFinal}`)
    }
}
console.log("")
