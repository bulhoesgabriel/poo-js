var ingredientes = ['mel', 'água', 'sal', 'mostarda']

// distribuindo responsabilidades

function capitalizar(ingredientes) {

    var modificado = []

    for (var c = 0; c < ingredientes.length; c++) {
        var letraInicial = ingredientes[c].charAt(0).toUpperCase()
        var restoTexto = ingredientes[c].slice(1)
        var resultado = letraInicial + restoTexto
        modificado[c] = resultado
    }

    return modificado

}

function ordenar(ingredientes) {

    return ingredientes.sort(function(a, b) {
        return a.localeCompare(b)
    })

}

resultadoCapitalizado = (capitalizar(ingredientes))

resultadoOrdenado = (ordenar(resultadoCapitalizado))

console.log(resultadoCapitalizado, resultadoOrdenado)

// melhoramos a organização do código-fonte, apesar do vetor original do resultadoCapitalizado estar sendo modificado pela função ordenar e o console.log mostrar os vetores iguais

// esse código ainda possui vários problemas, mas já começamos a organizar e é isso que será mostrado no decorrer das aulas