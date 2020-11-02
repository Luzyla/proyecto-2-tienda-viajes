/*----------------------------------------
                CONSTANTES
---------------------------------------- */
// FOCUS tabindex
// document.getElementsByTagName('div')[0].focus();
// console.log(document.getElementsByTagName('div')[0].focus();

// document.getElementById("myAnchor3").tabIndex = "1";

// BODY
const cuerpo = document.getElementById("cuerpo-html")
const aside = document.querySelector(".aside")
const firma = document.querySelector(".link-firma")

// CARRITO
const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrarCarrito = document.getElementById("cerrar")
const botonComprar = document.getElementById("boton-comprar")
const botonVaciar = document.getElementById("boton-vaciar")
const contenedorCarrito = document.querySelector(".contenedor-resumen-carrito")

// CARRITO ON CLICK
const viajesEnCarrito = document.getElementById("productos-carrito")
const cantidadViajesAgregados = document.getElementById("cuantos-viajes-agregados") // revisar

// CONFIRMA VACIAR CARRITO
const overlayVaciar = document.getElementById("fondo-overlay-vaciar")
const confirmacionPopUp = document.getElementById("contenedor-vaciar-carrito")
const botonCancelar = document.getElementById("boton-cancelar")
const botonConfirmaVaciar = document.getElementById("boton-vaciar-carrito")

// FILTRO X CATEGORIA
const filtroCategorias = document.querySelectorAll(".filtro-categoria input")
const viajes = document.querySelectorAll(".product")
// FILTRO X STARS
const filtroPuntajes = document.querySelectorAll(".filtro-puntaje")
// FILTRO X INPUT
const search = document.getElementById("search")
// LIMPIAR FILTROS
const trash = document.getElementById("cleaning-filters")
// TEXTO MOSTRANDO VIAJES BUSCADOS
const mostrarViajes = document.getElementById("mostrando-busqueda-viajes")

// CHECKOUT COMPRA
const cerrarCheckout = document.getElementById("cerrar-checkout")
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
const formularioCheckout = document.querySelector("contenedor-formulario-confirmar-compra")

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

// VARIABLES 
let viajesFiltrados = 0

// DESPLIEGA FILTROS EN RESPONSIVE
const lupaDropdown = document.getElementById("despliega-filtros")
const contenedorFiltrosDeBusqueda = document.querySelector(".formulario-aside")

// AGREGAR VIAJES AL CARRITO
const botonComprarViajes = document.querySelectorAll("#buy-item")
const itemsCarrito = document.getElementById("items-carrito")
const viajesEnReserva = document.getElementsByClassName("viaje-elegido")
let agregaViaje = 0

// ELIMINAR VIAJES DEL CARRITO
const trashMiniatura = document.querySelectorAll("#id-trash-miniatura")



/*----------------------------------------
        AGREGAR VIAJES AL CARRITO
---------------------------------------- */
for (let viajeElegido of botonComprarViajes) {
    viajeElegido.onclick = () => {
        viajeElegido.classList.add("viaje-elegido")
        agregaViaje++
        itemsCarrito.textContent = `Carrito (${agregaViaje} Items)`
    }
}

const crearMiniaturaViaje = (viajeReservado) => {
    let miniaturaViajeHTML = `
    <div class="contenedor-viaje-miniatura">
        <div class="contenedor-img-miniatura">
            <img class="img-tarjeta-miniatura" src="${viajeReservado.dataset.imagen}">
        </div>
        
        <div class="contenedor-info-miniatura">
            <div class="sub-contenedor-info-miniatura">
                <p class="destino-txt-miniatura">${viajeReservado.dataset.destino.toUpperCase()}</p>
                <input type="image" src="./images/icons8-trash2.svg" alt="Eliminar viaje del carrito" 
                aria-labelledby="Eliminar viaje del carrito" class="trash-miniatura" id="id-trash-miniatura"
                value="${viajeReservado.dataset.destino}" tabIndex="2">
            </div>

            <div class="sub-contenedor-info-miniatura">
                <label for="cantidad-de-viajes">
                    <input type="number" name="cantidad" id="cantidad-de-viajes" value="1" 
                    aria-labelledby="Cantidad de unidades del viaje elegido" class="cantidad-viajes"
                    tabIndex="1" min="1">
                </label>
                <p class="precio-viaje-miniatura">x $<span>${viajeReservado.dataset.precio}<span></p>
            </div>
        </div>
    </div>
    <hr>
    `
    return miniaturaViajeHTML
}

/*----------------------------------------
        ELIMINAR VIAJES DEL CARRITO
---------------------------------------- */
// const eliminarMiniaturaDeviaje = (viajeElegido) => {
//     if (viajeReservado.dataset.destino === true) {
//         viajeElegido.classList.remove("viaje-elegido")
//     }
// }

/*----------------------------------------
        CARRITO ON CLICK
---------------------------------------- */
const seteoTabindexCarrito = () => {
    cerrarCarrito.setAttribute("tabIndex", 1);
    botonVaciar.setAttribute("tabIndex", 3);
    botonComprar.setAttribute("tabIndex", 4);
    
    cuerpo.setAttribute("tabIndex", -1);
    aside.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    firma.setAttribute("tabIndex", -1);
}

const subtotalMiniatura = (viajeReservado) => {
    return viajeReservado.dataset.precio
}

const agregaMiniaturasDeViajesElegidos = () => {
    if (viajesEnReserva.length === 0) {
        cantidadViajesAgregados.textContent = `Aún no tenes viajes seleccionados!`
        botonComprar.classList.add("hidden")
        botonVaciar.classList.add("hidden")
        contenedorCarrito.classList.add("hidden")
    }

    else {
        cantidadViajesAgregados.textContent = `Tenes ${agregaViaje} viaje(s) agregado(s)`
        botonComprar.classList.remove("hidden")
        botonVaciar.classList.remove("hidden")
        contenedorCarrito.classList.remove("hidden")

        todosLosViajesHTML = ""
        for (let viajeReservado of viajesEnReserva) {
            todosLosViajesHTML = todosLosViajesHTML + crearMiniaturaViaje(viajeReservado)
        }
        
        viajesEnCarrito.innerHTML = todosLosViajesHTML
    }
}

// CARRITO MENÚ DESPLEGABLE
// const viajesEnReserva = document.getElementsByClassName("viaje-elegido")
carrito.onclick = () => {
    
    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")
    cuerpo.classList.add("agrega-overflow")

    seteoTabindexCarrito()
    agregaMiniaturasDeViajesElegidos()

    // trashMiniatura.onclick = () => {
    //     eliminarMiniaturaDeviaje()       
    // }
    // console.log(trashMiniatura)

};



cerrarCarrito.onclick = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
}

/*----------------------------------------
            VACIAR CARRITO
// ---------------------------------------- */

botonVaciar.onclick = () => {
    confirmacionPopUp.classList.add("mostrar-confirma")
    overlayVaciar.classList.add("mostrar-checkout")
    
    botonCancelar.setAttribute("tabIndex", 1)
    botonConfirmaVaciar.setAttribute("tabIndex", 2)
    
    cerrarCarrito.setAttribute("tabIndex", -1);
    botonVaciar.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    aside.setAttribute("tabIndex", -1)

}


botonConfirmaVaciar.onclick = () => {
    confirmacionPopUp.classList.remove("mostrar-confirma")
    overlayVaciar.classList.remove("mostrar-checkout")
    todosLosViajesHTML = ""
    // eliminar elementos del carrito
    //viajesEnReserva = document.getElementsByClassName("viaje-elegido")
    // viajeElegido.classList.remove("viaje-elegido")
    // modificar tabindex a numero negativo
}

botonCancelar.onclick = () => {
    confirmacionPopUp.classList.remove("mostrar-confirma")
    overlayVaciar.classList.remove("mostrar-checkout")
}


/*----------------------------------------
                CHECKOUT
---------------------------------------- */
const seteoTabindexCheckout = () => {
    // COMPLETAR
    
    cerrarCarrito.setAttribute("tabIndex", 1);
    botonVaciar.setAttribute("tabIndex", 3);
    botonComprar.setAttribute("tabIndex", 4);
    
    cuerpo.setAttribute("tabIndex", -1);
    aside.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    firma.setAttribute("tabIndex", -1);
}

botonComprar.onclick = () => {
    confirmarCompra.classList.add("mostrar-checkout")
    overlay2.classList.add("mostrar-checkout")
    seteoTabindexCheckout()

}

cerrarCheckout.onclick = () => {
    confirmarCompra.classList.remove("mostrar-checkout")
    overlay2.classList.remove("mostrar-checkout")
}


botonSeguirComprando.onclick = () => {
    confirmarCompra.classList.remove("mostrar-checkout")
    overlay2.classList.remove("mostrar-checkout")
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
}

botonFinalizarCompra.onclick = () => {
    
    alert("Compra finalizada con éxito!")
}

//console.log(confirmarCompra)
/*----------------------------------------
        VER COMO GRILLA O LISTA
---------------------------------------- */
// OPERACIONES DEL CHECKOUT

radioEfectivo.oninput = () => {
    conRecargo.classList.add("hidden")
}

const sumarRecargo = () => {
    let recargo = valorSubtotal * 0.1
    recargo.textContent = recargo
}

radioTarjeta.oninput = () => {
    conRecargo.classList.remove("hidden")
    sumarRecargo()
}

checkboxEnvio.oninput = () => {
    conEnvio.classList.toggle("hidden")
}

const sumarDescuento = () => {
    let descuento = valorSubtotal * 0.05
    valorDescuento.textContent = `-${Number(descuento)}`
}

checkboxDescuento.oninput = () => {
    conDescuento.classList.toggle("hidden")
    sumarDescuento()
}

const sumaDestinosMiniatura = () => {

}

valorSubtotal.textContent = sumaDestinosMiniatura()

/*----------------------------------------
            VER COMO LISTA
---------------------------------------- */
verComoLista.onclick = () => {
    agregaClaseATodasLasTarjetas()
    agregaClaseALasImagenesDeLasTarjetas()
    agregaClaseALosContenedoresDeImagenesDeLasTarjetas()
    agregaClaseAlContenedorDeInfoDeLasTarjetas()
    eliminaClaseDescripciónDeLasTarjetas()
}

const agregaClaseATodasLasTarjetas = () => {
    for (let viaje of todosLosViajes) {
        viaje.classList.add("ver-como-lista")
    }
}

const agregaClaseALasImagenesDeLasTarjetas = () => {
    for (let foto of todasLasFotosDeViajes) {
        foto.classList.add("img-como-lista")
    }
}

const agregaClaseALosContenedoresDeImagenesDeLasTarjetas = () => {
    for (let contenedor of contenedorDeTodasLasFotos) {
        contenedor.classList.add("margen-como-lista")
    }    
}

const agregaClaseAlContenedorDeInfoDeLasTarjetas = () => {
    for (let info of contenedorDeLaInfo) {
        info.classList.add("contenedor-contenido-viaje-lista")
    }    
}

const eliminaClaseDescripciónDeLasTarjetas = () => {
    for (let descripcion of contenedorDescripciones) {
        descripcion.classList.remove("hidden")
    }    
}

/*----------------------------------------
            VER COMO GRILLA
---------------------------------------- */
verComoGrilla.onclick = () => {
    eliminaClaseATodasLasTarjetas()
    eliminaClaseALasImagenesDeLasTarjetas()
    eliminaClaseALosContenedoresDeImagenesDeLasTarjetas()
    eliminalaseAlContenedorDeInfoDeLasTarjetas()
    agregaClaseDescripciónDeLasTarjetas()
}

const eliminaClaseATodasLasTarjetas = () => {
    for (let viaje of todosLosViajes) {
        viaje.classList.remove("ver-como-lista")
    }
}

const eliminaClaseALasImagenesDeLasTarjetas = () => {
    for (let foto of todasLasFotosDeViajes) {
        foto.classList.remove("img-como-lista")
    }
}

const eliminaClaseALosContenedoresDeImagenesDeLasTarjetas = () => {
    for (let contenedor of contenedorDeTodasLasFotos) {
        contenedor.classList.remove("margen-como-lista")
    }
}

const eliminalaseAlContenedorDeInfoDeLasTarjetas = () => {
    for (let info of contenedorDeLaInfo) {
        info.classList.remove("contenedor-contenido-viaje-lista")
    }
}

const agregaClaseDescripciónDeLasTarjetas = () => {
    for (let descripcion of contenedorDescripciones) {
        descripcion.classList.add("hidden")
    }
}

console.log(cerrarCheckout)

/*----------------------------------------
------------------------------------------
    FILTROS DE BÚSQUEDA FUNCIONALIZADOS
------------------------------------------
----------------------------------------*/
// PEQUEÑAS f(x)
const ocultarDestino = (viaje) => {
    return viaje.classList.add("hidden")
    // viajesOcultos++
}
  
const mostrarDestino = (viaje) => {
    return viaje.classList.remove("hidden")
}

/* Male, en el agregado de la funcionalidad de contar los viajes filtrados tuve unos cuántos problemas,
por lo que llegué a una fórmula donde filtra bien en un 99%, y no quise tocarla más. En el único caso que
no funciona es cuando la búsqueda da "0" y muestra "1". Evidentemente hay algún error, porque si fijaba la 
variable inicial en 0 dentro de la función, siempre filtraba una unidad de menos...*/
const filtrarDestinos = () => {
    viajesFiltrados = 1 
    for (let viaje of todosLosViajes) {
        if (pasaTodosLosFiltros(viaje)) {
            mostrarDestino(viaje)
            viajesFiltrados++
        }
        else {
            ocultarDestino(viaje)
        }
    }
}

// FILTROS
search.oninput = () => {
    filtrarDestinos()
    //console.log(search.value)
}

for (let checkboxCategoria of filtroCategorias) {
    checkboxCategoria.oninput = () => {
        filtrarDestinos()
    }
}

for (let checkboxStar of filtroPuntajes) {
    checkboxStar.oninput = () => {
        filtrarDestinos()
    }
}

// VERIFICA INPUT
const hayAlgoEscritoEnElInput = () => {
    if (search.value) {
        return true
    }
    else {
        return false
    }
}
// console.log(hayAlgoEscritoEnElInput())

// COMPARA FILTRO CON INFO
const compararInputConDestino = (viaje) => {
    if (viaje.dataset.destino.includes(search.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }
}
// console.log("Comparar Input")
// console.log('viaje')
// console.log(search.value)

// INPUT
const pasaFiltroInput = (viaje) => {
    if (hayAlgoEscritoEnElInput()) {
        if (compararInputConDestino(viaje)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}
// console.log("Filtro input")
// console.log(pasaFiltroInput())

// VERIFICA CATEGORIA
const hayAlgunaCategoriaChequeada = () => {
    for (let checkboxCategoria of filtroCategorias) {
        if (checkboxCategoria.checked) {
            
            return true
        }
    }
    return false
}
// console.log("Categoría chequeada")
// console.log(hayAlgunaCategoriaChequeada())

const compararCategoriaConDestino = (viaje) => {
    if (hayAlgunaCategoriaChequeada()) {
        for (let checkboxCategoria of filtroCategorias) {
            if (checkboxCategoria.checked) {
                if (checkboxCategoria.value === viaje.dataset.categoria) {
                    return true
                }
            }
        }
    }
    return false
}
// console.log("Comparar categoria de Viaje")
// console.log(compararCategoriaConDestino())


// CHECKBOX CATEGORÍA
const pasaFiltroCategoria = (viaje) => {
    if(hayAlgunaCategoriaChequeada()) {
        if(compararCategoriaConDestino(viaje)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}
// console.log("Filtro Categoría")
console.log(pasaFiltroCategoria())

// VERIFICA STARS
const hayAlgunaStarChequeada = () => {
    for (let checkboxStar of filtroPuntajes) {
        if (checkboxStar.checked) {
            
            return true
        }
    }
    return false
}

const compararStarConDestino = (viaje) => {
    if (hayAlgunaStarChequeada()) {
        for (let checkboxStar of filtroPuntajes) {
            if (checkboxStar.checked) {
                if (checkboxStar.value === viaje.dataset.stars) {
                    return true
                }
            }
        }
    }
    return false
}
// console.log("Comparar Stars")
// console.log(compararStarConDestino())

// CHECKBOX STARS
const pasaFiltroStars = (viaje) => {
    if(hayAlgunaStarChequeada()) {
        if(compararStarConDestino(viaje)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}
// console.log("Filtro Stars")
// console.log(pasaFiltroStars())

/* ------------------------------- 
            REVISAR 
--------------------------------*/

// MOSTRAR CANTIDAD VIAJES FILTRADOS (problema: suma cada vez que busca, aunque no haya viajes filtrados)

const contarViajesFiltrados = () => {
    const todosLosViajesEnNumeros = todosLosViajes.length 
    //console.log("Todos los Viajes:", todosLosViajesEnNumeros, "Viajes Ocultos:", viajesOcultos, "Viajes Filtrados:", viajesFiltrados)
    mostrarViajes.textContent = `Mostrando ${viajesFiltrados} viaje(s) de ${todosLosViajesEnNumeros}`    
}


// FILTROS SIMULTANEOS 
const pasaTodosLosFiltros = (viaje) => {
    if (pasaFiltroInput(viaje) && pasaFiltroCategoria(viaje) && pasaFiltroStars(viaje)) {
        contarViajesFiltrados()
        return true
    }
    else {
        return false
    }
}

// LIMPIAR TODOS LOS FILTROS
trash.onclick = () => {
    document.getElementById("filters-form").reset()
    for (let viaje of todosLosViajes) {
        viaje.classList.remove("hidden")
    }
}


/*----------------------------------------
DESPLIEGA FILTROS DE BÚSQUEDA EN RESPONSIVE
---------------------------------------- */

lupaDropdown.onclick = () => {
    contenedorFiltrosDeBusqueda.classList.toggle("blocking-hidden")
}


/*----------------------------------------------
                    by @Luzyla
----------------------------------------------*/