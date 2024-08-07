function fnCapitalizar(vetor) {

    var modificado = []

    for (var c = 0; c < vetor.length; c++) {
        var letraInicial = vetor[c].charAt(0).toUpperCase()
        var restoTexto = vetor[c].slice(1)
        var resultado = letraInicial + restoTexto
        modificado[c] = resultado
    }

    return modificado

}

function fnOrdenar(vetor) {

    return vetor.sort(function(a, b) {
        return a.localeCompare(b)
    })

}

function fnCaixaAlta(vetor) {

    var modificado = []

    for (var c = 0; c < vetor.length; c++) {
        modificado[c] = vetor[c].toUpperCase()
    }

    return modificado

}

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}

// aqui estamos exportando 3 funções distintas dentro do objeto "modificador"