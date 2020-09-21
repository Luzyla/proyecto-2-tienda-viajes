// CARRITO MENÚ DESPLEGABLE

const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrar = document.getElementById("cerrar")

carrito.onclick = () => {
    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")

}

cerrar.onclick = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")

}

// FILTRO X CATEGORIA
const filtroCategorias = document.querySelectorAll(".filtro-categoria")
const articles = document.querySelectorAll(".product")

// console.log(filtroCategorias)
// console.log(articles)

for (let checkbox of filtroCategorias) {
    checkbox.onclick = () => {
        for (card of articles) {
            // if (checkbox.checked) {
                if (checkbox.dataset.categoria === card.dataset.categoria) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            // }
            // else {
            //      card.classList.remove('hidden');
            // }
        }
            
    };
}


// FILTRO X STARS
const filtroPuntajes = document.querySelectorAll(".filtro-puntaje")
// const articles = document.querySelectorAll(".product")

console.log(filtroPuntajes)
console.log(articles)

for (let checkbox of filtroPuntajes) {
    checkbox.onclick = () => {
        for (card of articles) {
            // if (checkbox.checked) {
                if (checkbox.dataset.stars === card.dataset.stars) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            // }
            // else {
            //      card.classList.remove('hidden');
            // }
        }
            
    };
}

    
     






// //VARIABLES
// const tarjetas = document.querySelector(".product")
// const filtroDestino = document.querySelector("#search")

// console.log(tarjetas)
// console.log(filtroDestino)

// // BÚSQUEDA POR TEXTO

// filtroDestino.oninput = () => {
      
//     for(let tarjeta of tarjetas) {

//         const destino = tarjeta.dataset.destino
//         const busqueda = filtroDestino.value
        
//         if (busqueda.includes(destino)) {
//             tarjeta.classList.remove("hidden")
//         }
//         else {
//             tarjeta.classList.add("hidden")
//         }
//     }
// }
//console.log(filtroDestino.value)
