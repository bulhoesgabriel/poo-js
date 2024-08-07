import modificador from './modificador.js'
import ingredientes from './ingredientes.js'

let ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome')

let ingredientesOrdenados = modificador.ordenar(ingredientesCapitalizados, 'nome')

let containerIngredientes = document.getElementById('container-ingredientes')

for (let ingrediente of ingredientesOrdenados) {
    
    let textoHTML = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}" alt="Imagem de ${ingrediente.nome}" />
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `

    containerIngredientes.innerHTML += textoHTML

}