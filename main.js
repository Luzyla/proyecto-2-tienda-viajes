//VARIABLES
const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrar = document.getElementById("cerrar")

// FILTRO X CATEGORIA
const filtroCategorias = document.querySelectorAll(".filtro-categoria")
const articles = document.querySelectorAll(".product")

// FILTRO X STARS
const filtroPuntajes = document.querySelectorAll(".filtro-puntaje")
// const articles = document.querySelectorAll(".product")

// CHECKOUT COMPRA
const botonComprar = document.getElementById("boton-comprar")
const botonVaciar = document.getElementById("boton-vaciar")
const confirmarCompra = document.querySelector(".contenedor-confirmar-compra")
const overlay2 = document.getElementById("fondo-overlay-modal")
const botonSeguirComprando = document.getElementById("button-buying")
const botonFinalizarCompra = document.getElementById("button-ends")
const sumaProductos = document.getElementById("suma-productos")
const valorSubtotal = document.getElementById("valor-subtotal")
const conEnvio = document.getElementById("con-envio")
const valorEnvio = document.getElementById("valor-envio")
const conDescuento = document.getElementById("con-descuento")
const valorDescuento = document.getElementById("valor-descuento")
const conRecargo = document.getElementById("con-recargo")
const valorRecargo = document.getElementById("valor-recargo")
const sumaTotal = document.getElementById("suma-total")
const valorTotal = document.getElementById("valor-total")

const radioEfectivo = document.getElementById("efectivo-debito")
const radioTarjeta = document.getElementById("tarjeta")
const checkboxEnvio = document.getElementById("envio")
const checkboxDescuento = document.getElementById("dto")


// CARRITO MENÚ DESPLEGABLE
carrito.onclick = () => {
    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")

}

cerrar.onclick = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")

}

// CARRITO MODAL FIN DE COMPRA
botonComprar.onclick = () => {
    confirmarCompra.classList.add("mostrar")
    overlay2.classList.add("mostrar")

}

botonSeguirComprando.onclick = () => {
    confirmarCompra.classList.remove("mostrar")
    overlay2.classList.remove("mostrar")
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
}

// OPERACIONES DEL CHECKOUT
radioEfectivo.oninput = () => {
    conRecargo.classList.add("hidden")
}

radioTarjeta.oninput = () => {
    conRecargo.classList.remove("hidden")
    sumarRecargo()
}

const sumarRecargo = (sumaProductos, porcentaje) => {
    porcentaje = 0.10
    let recargo = sumaProductos * porcentaje
    recargo.textContent = recargo
}
console.log(sumarRecargo())

checkboxEnvio.oninput = () => {
    conEnvio.classList.toggle("hidden")
    valorEnvio.textContent = "100"
}

checkboxDescuento.oninput = () => {
    conDescuento.classList.toggle("hidden")
    sumarDescuento()
}

const sumarDescuento = (sumaProductos, porcentaje) => {
    porcentaje = 0.15
    let descuento = sumaProductos * porcentaje
    valorEnvio.textContent = descuento
}
console.log(sumarDescuento())


// FILTRO X CATEGORIA

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

console.log(filtroPuntajes)
console.log(articles)

for (let checkbox of filtroPuntajes) {
    checkbox.onclick = () => {
        for (card of articles) {
            if (checkbox.checked) {
                if (checkbox.dataset.stars === card.dataset.stars) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            }
            else {
                 card.classList.remove('hidden');
            }
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
