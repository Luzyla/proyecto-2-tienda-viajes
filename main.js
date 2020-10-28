/*----------------------------------------
                CONSTANTES
---------------------------------------- */
// FOCUS tabindex
// document.getElementsByTagName('div')[0].focus();
// console.log(document.getElementsByTagName('div')[0].focus();

// document.getElementById("myAnchor3").tabIndex = "1";

// CARRITO
const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrarCarrito = document.getElementById("cerrar")
const cerrarCheckout = document.getElementById("cerrar-checkout")
const botonComprar = document.getElementById("boton-comprar")
const botonVaciar = document.getElementById("boton-vaciar")
const cuerpo = document.getElementById("cuerpo-html")

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

// // VARIABLES 
let viajesFiltrados = 0
let viajesOcultos = 0 //ver si se puede borrar o es útil para algo

// AGREGAR VIAJES AL CARRITO
const botonComprarViajes = document.querySelectorAll("#buy-item")
const itemsCarrito = document.getElementById("items-carrito")
let agregaViaje = 0

/*----------------------------------------
        AGREGAR VIAJES AL CARRITO
---------------------------------------- */
// ver
for (let viajeElegido of botonComprarViajes) {
    viajeElegido.onclick = () => {
        viajeElegido.classList.add("viaje-elegido")
        agregaViaje++
        itemsCarrito.textContent = `Carrito (${agregaViaje} Items)`
        // console.log(comprarViaje.dataset.destino, comprarViaje.classList)   
    }
}

/*----------------------------------------
        CARRITO ON CLICK
---------------------------------------- */
const viajesEnCarrito = document.getElementById("productos-carrito")
const cantidadViajesAgregados = document.getElementById("cuantos-viajes-agregados")

// CARRITO MENÚ DESPLEGABLE
carrito.onclick = () => {
    const viajesEnReserva = document.getElementsByClassName("viaje-elegido")
    

    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")
    cuerpo.classList.add("agrega-overflow")
    // overlay.innerHTML = `tabindex="1"`
    //modificaSignoTabIndex() // hacer función que cambie de negativo a positivo y viceversa
    if (viajesEnReserva.length === 0) {
        cantidadViajesAgregados.textContent = `Aún no tenes viajes seleccionados!`
    }
    else {
        cantidadViajesAgregados.textContent = `Tenes ${agregaViaje} viaje(s) agregado(s)`

        for (let viajeReservado of viajesEnCarrito) {
            console.log(viajeReservado.dataset.destino)

        }
    }

};

cerrarCarrito.onclick = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
}

/*----------------------------------------
            VACIAR CARRITO
// ---------------------------------------- */
// const overlayVaciar = document.getElementById("fondo-overlay-vaciar")
// const confirmacionPopUp = document.getElementById("contenedor-vaciar-carrito")
// const botonCancelar = document.getElementById("boton-cancelar")
// const botonConfirmaVaciar = document.getElementById("boton-vaciar-carrito")
botonVaciar.onclick = () => {
    confirmacionPopUp.classList.add("mostrar-confirma")
    overlayVaciar.classList.add("mostrar")
    // modificar tabindex a numero negativo
}

botonConfirmaVaciar.onclick = () => {
    // eliminar elementos del carrito
    confirmacionPopUp.classList.remove("mostrar-confirma")
    overlayVaciar.classList.remove("mostrar")
    // modificar tabindex a numero negativo
   
}

botonCancelar.onclick = () => {
    confirmacionPopUp.classList.remove("mostrar2")
    overlayVaciar.classList.remove("mostrar")
    // modificar tabindex a numero negativo
}

/*----------------------------------------
                CHECKOUT
---------------------------------------- */
botonComprar.onclick = () => {
    confirmarCompra.classList.add("mostrar-checkout")
    overlay2.classList.add("mostrar-checkout")

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

console.log(confirmarCompra)
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
    // valorEnvio.innerHTML = Number(100)
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
    viajesOcultos++
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
    console.log(search.value)
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


