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
