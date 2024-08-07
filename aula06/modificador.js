function fnCapitalizar(colecao, atributo) {

    if (typeof colecao[0] == 'object') {

        var resultado = colecao.map(function(obj) {

            var letraInicial = obj[atributo].charAt(0).toUpperCase()
            var restoTexto = obj[atributo].slice(1)

            obj[atributo] = letraInicial + restoTexto

            return obj

        })

    } else {

        var string = colecao

        for (var c = 0; c < string.length; c++) {
            var letraInicial = string[c].charAt(0).toUpperCase()
            var restoTexto = string[c].slice(1)
            var resultado = letraInicial + restoTexto
            string[c] = resultado
        }

        return string

    }

}

export default {
    capitalizar: fnCapitalizar
}