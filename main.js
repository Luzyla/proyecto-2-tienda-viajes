/*----------------------------------------
        VARIABLES CONSTANTES
---------------------------------------- */
// CARRITO
const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrarCarrito = document.getElementById("cerrar")
const cerrarCheckout = document.getElementById("cerrar-checkout")
const botonComprar = document.getElementById("boton-comprar")
const botonVaciar = document.getElementById("boton-vaciar")
const cuerpo = document.getElementById("cuerpo-html")

// FILTRO X CATEGORIA
const filtroCategorias = document.querySelectorAll(".filtro-categoria")
const articles = document.querySelectorAll(".product")

// FILTRO X STARS
const filtroPuntajes = document.querySelectorAll(".filtro-puntaje")

// CHECKOUT COMPRA
const confirmarCompra = document.querySelector(".contenedor-confirmar-compra")
const overlay2 = document.getElementById("fondo-overlay-modal")
const botonSeguirComprando = document.getElementById("button-buying")
const botonFinalizarCompra = document.getElementById("button-ends")

// RESUMEN CHECKOUT
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

// OPCIONES DE PAGO
const radioEfectivo = document.getElementById("efectivo-debito")
const radioTarjeta = document.getElementById("tarjeta")
const checkboxEnvio = document.getElementById("envio")
const checkboxDescuento = document.getElementById("dto")

//VER COMO GRILLA O LISTA
const verComoLista = document.getElementById("ver-lista")
const verComoGrilla = document.getElementById("ver-grilla")
const todasLasFotosDeViajes = document.querySelectorAll(".img-tarjeta")
const contenedorDeTodasLasFotos = document.querySelectorAll(".contenedor-img-tarjeta")
const contenedorDeLaInfo = document.querySelectorAll(".contenedor-contenido-viaje")
const contenedorDescripciones = document.querySelectorAll(".detalle-viaje")

// TODAS LAS TARJETAS DE VIAJES
const todosLosViajes = document.querySelectorAll(".contenedor-tarjeta")


/*----------------------------------------
        VER COMO GRILLA O LISTA
---------------------------------------- */
// CARRITO MENÚ DESPLEGABLE
carrito.onclick = () => {
    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")
    cuerpo.classList.add("agrega-overflow")

}

cerrarCarrito.onclick = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
}

/*----------------------------------------
        VER COMO GRILLA O LISTA
---------------------------------------- */
// CHECKOUT
botonComprar.onclick = () => {
    confirmarCompra.classList.add("mostrar")
    overlay2.classList.add("mostrar")

}

cerrarCheckout.onclick = () => {
    confirmarCompra.classList.remove("mostrar")
    overlay2.classList.remove("mostrar")
}


botonSeguirComprando.onclick = () => {
    confirmarCompra.classList.remove("mostrar")
    overlay2.classList.remove("mostrar")
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
}

/*----------------------------------------
        VER COMO GRILLA O LISTA
---------------------------------------- */
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

/*----------------------------------------
        VER COMO GRILLA O LISTA
---------------------------------------- */
verComoLista.onclick = () => {
    agregaClasesATodasLasTarjetas()
}

const agregaClasesATodasLasTarjetas = () => {
    for (let viaje of todosLosViajes) {
        viaje.classList.add("ver-como-lista")
    }

    for (let foto of todasLasFotosDeViajes) {
        foto.classList.add("img-como-lista")
    }

    for (let contenedor of contenedorDeTodasLasFotos) {
        contenedor.classList.add("margen-como-lista")
    }

    for (let info of contenedorDeLaInfo) {
        info.classList.add("contenedor-contenido-viaje-lista")
    }

    for (let descripcion of contenedorDescripciones) {
        descripcion.classList.remove("hidden")
    }
}

verComoGrilla.onclick = () => {
    eliminaClasesATodasLasTarjetas()
}

const eliminaClasesATodasLasTarjetas = () => {
    for (let viaje of todosLosViajes) {
        viaje.classList.remove("ver-como-lista")
    }

    for (let foto of todasLasFotosDeViajes) {
        foto.classList.remove("img-como-lista")
    }

    for (let contenedor of contenedorDeTodasLasFotos) {
        contenedor.classList.remove("margen-como-lista")
    }

    for (let info of contenedorDeLaInfo) {
        info.classList.remove("contenedor-contenido-viaje-lista")
    }

    for (let descripcion of contenedorDescripciones) {
        descripcion.classList.add("hidden")
    }
}

/*----------------------------------------
        FILTROS DE BÚSQUEDA
---------------------------------------- */



const filtrarViajes = () => {
    for (let viaje of todosLosViajes) {
        if (pasaFiltros(card)) {
            mostrarViaje(card)
        }
        else {
            ocultarViaje(card)
        }
    }
}



// --------------------------------------

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
            
        }
            
    };
}


// FILTRO X STARS

// console.log(filtroPuntajes)
// console.log(articles)

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
