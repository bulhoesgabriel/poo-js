var ingredientes = ['mel', 'água', 'sal', 'mostarda']
var modificado = []

// abordagem procedural:

for (var c = 0; c < ingredientes.length; c++) {
    var letraInicial = ingredientes[c].charAt(0).toUpperCase()
    var restoTexto = ingredientes[c].slice(1)
    var resultado = letraInicial + restoTexto
    modificado[c] = resultado
}

var ordenado = modificado.sort(function(a, b) {
    return a.localeCompare(b)
})

// nesse caso adicionamos uma função para o sort considerar caracteres locais (latinos)

console.log(ordenado)

// essa abordagem funcionou neste caso isolado, mas a sua manutenção não é simples, acabamos por jogar recursos computacionais fora... temos que pensar no reuso do código