import modificador from './modificador.js'

var ingredientes = ['mel', 'água', 'sal', 'mostarda']

var resultadoCapitalizado = modificador.capitalizar(ingredientes)
var resultadoOrdenado = modificador.ordenar(resultadoCapitalizado)
var resultadoCaixaAlta = modificador.caixaAlta(resultadoOrdenado)

// ficou faltando saber como fazemos para manter o resultado original do vetor capitalizado (apenas capitalizado e não ordenado)

console.log(resultadoCapitalizado, resultadoOrdenado, resultadoCaixaAlta)

// modularização e responsabilidades bem definidas = resultados mais fáceis de se manter