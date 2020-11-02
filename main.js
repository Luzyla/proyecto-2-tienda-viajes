/*----------------------------------------
                CONSTANTES ✅
---------------------------------------- */
// BODY
const cuerpo = document.getElementById("cuerpo-html")
const aside = document.querySelector(".aside")
const firma = document.querySelector(".link-firma")

// CARRITO
const carrito = document.querySelector(".contenedor-carrito")
const menuCarrito = document.getElementById("carrito-menu")
const overlay = document.getElementById("fondo-overlay")
const cerrarCarrito = document.getElementById("cerrar")
const cerrarCheckout = document.getElementById("cerrar-checkout")
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

// DATOS PERSONALES CHECKOUT
const inputNombre = document.getElementById("nombre")
const inputMail = document.getElementById("mail")

// OPCIONES DE PAGO CHECKOUT
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

// AGREGAR VIAJES AL CARRITO
const botonComprarViajes = document.querySelectorAll("#buy-item")
const itemsCarrito = document.getElementById("items-carrito")
const viajesEnReserva = document.getElementsByClassName("viaje-elegido")
let agregaViaje = 0

// ELIMINAR VIAJES DEL CARRITO
const trashMiniaturas = document.querySelectorAll("#id-trash-miniatura")


/*----------------------------------------
        AGREGAR VIAJES AL CARRITO ✅
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
                aria-labelledby="Eliminar viaje del carrito" class="trash-miniatura" 
                id="id-trash-miniatura" value="${viajeReservado.dataset.destino}" tabIndex="2">
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
---------------------------------------- REVISAR */
// for (trashMiniatura of trashMiniaturas) {
//     console.log(trashMiniaturas, "trashMiniaturas")
//     trashMiniatura.onclick = () => {
//         if (trashMiniatura.value === viajeReservado.dataset.destino)

//         for (let viajeReservado of viajesEnReserva) {
//             todosLosViajesHTML = todosLosViajesHTML + crearMiniaturaViaje(viajeReservado)
//         }
//         for (let viajeElegido of botonComprarViajes) {
//             console.log(viajeElegido, "trashMiniaturas")
//             viajeElegido.classList.remove("viaje-elegido")
//             agregaViaje--
//             cantidadViajesAgregados.textContent = `Tenes ${agregaViaje} viaje(s) agregado(s)`
//             itemsCarrito.textContent = `Carrito (${agregaViaje} Items)`
//         }
//     }
// // }
// trashMiniaturas.onclick = () => {
    
// }
//console.log(trashMiniaturas, "trash Miniaturas")

/*----------------------------------------
        OPERACIONES DEL CARRITO 
---------------------------------------- */


/*----------------------------------------
        OPERACIONES DEL CHECKOUT 
---------------------------------------- */
const valorSubtotalNumero = Number(valorSubtotal)
// let valorDeTodosLosViajesElegidos = Number(viajeElegido)

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

// const sumaDestinosMiniatura = () => {

// }

// valorSubtotal.textContent = sumaDestinosMiniatura()


/*----------------------------------------
        CARRITO ON CLICK ✅
---------------------------------------- */
const seteoTabindexCarrito = () => {
    cerrarCarrito.setAttribute("tabIndex", 1);
    botonVaciar.setAttribute("tabIndex", 3);
    botonComprar.setAttribute("tabIndex", 4);
    
    cuerpo.setAttribute("tabIndex", -1);
    aside.setAttribute("tabIndex", -1);
    firma.setAttribute("tabIndex", -1);
}

// const subtotalMiniatura = (viajeReservado) => { //REVISAR
//     const viajeReservadoNumero = Number(viajeReservado.dataset.precio)

//     return viajeReservadoNumero
// }

const ocultarContenedorBotonesCarrito = () => {
    contenedorCarrito.classList.add("hidden")
    agregaViaje = 0
}

const mostrarContenedorBotonesCarrito = () => {
    contenedorCarrito.classList.remove("hidden")
}


const agregaMiniaturasDeViajesElegidos = () => {
    if (viajesEnReserva.length === 0) {
        cantidadViajesAgregados.textContent = `Aún no tenes viajes seleccionados!`
        ocultarContenedorBotonesCarrito()
    }
    else {
        cantidadViajesAgregados.textContent = `Tenes ${agregaViaje} viaje(s) agregado(s)`
        mostrarContenedorBotonesCarrito()
        todosLosViajesHTML = ""
        for (let viajeReservado of viajesEnReserva) {
            todosLosViajesHTML = todosLosViajesHTML + crearMiniaturaViaje(viajeReservado)
        }
        
        viajesEnCarrito.innerHTML = todosLosViajesHTML
    }
}

const mostrarElementosCarrito = () => {
    menuCarrito.classList.add("mostrar")
    overlay.classList.add("mostrar")
    cuerpo.classList.add("agrega-overflow")
}

// CARRITO MENÚ DESPLEGABLE ✅
carrito.onclick = () => {
    mostrarElementosCarrito()
    seteoTabindexCarrito()
    agregaMiniaturasDeViajesElegidos()
    //console.log(trashMiniaturas, "trash Miniaturas")
};

const ocultarElementosCarrito = () => {
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")

}

cerrarCarrito.onclick = () => {
    ocultarElementosCarrito()
}

/*----------------------------------------
            VACIAR CARRITO ✅
---------------------------------------- */
const eliminaMiniaturasDeViajesElegidos = () => {
    for (let viajeReservado of viajesEnReserva) {
        if (viajeReservado.classList.contains("viaje-elegido")) {
            viajeReservado.classList.remove("viaje-elegido")
            todosLosViajesHTML = ""
            cantidadViajesAgregados.textContent = `Aún no tenes viajes seleccionados!`
            ocultarContenedorBotonesCarrito()
        }
    }
    // else {
    //     cantidadViajesAgregados.textContent = `Tenes ${agregaViaje} viaje(s) agregado(s)`
    //     mostrarContenedorBotonesCarrito()
    //     todosLosViajesHTML = ""
    //     for (let viajeReservado of viajesEnReserva) {
    //         todosLosViajesHTML = todosLosViajesHTML + crearMiniaturaViaje(viajeReservado)
    //     }
        
    //     viajesEnCarrito.innerHTML = todosLosViajesHTML
    // }
}

const seteoTabindexConfirmaVaciar = () => {
    botonCancelar.setAttribute("tabIndex", 1)
    botonConfirmaVaciar.setAttribute("tabIndex", 2)

    cerrarCarrito.setAttribute("tabIndex", -1);
    botonVaciar.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    aside.setAttribute("tabIndex", -1)
}

botonVaciar.onclick = () => {
    confirmacionPopUp.classList.add("mostrar-confirma")
    overlayVaciar.classList.add("mostrar-checkout")
    seteoTabindexConfirmaVaciar()
}

const modificaTextContentCarrito = () => {
    viajesEnCarrito.textContent = ""
    cantidadViajesAgregados.textContent = `Aún no tenes viajes seleccionados!`
    itemsCarrito.textContent = `Carrito (0 Items)`
}

botonConfirmaVaciar.onclick = () => {
    confirmacionPopUp.classList.remove("mostrar-confirma")
    overlayVaciar.classList.remove("mostrar-checkout")
    eliminaMiniaturasDeViajesElegidos() //probar
    cerrarCarrito.setAttribute("tabIndex", 1);
}

botonCancelar.onclick = () => {
    confirmacionPopUp.classList.remove("mostrar-confirma")
    overlayVaciar.classList.remove("mostrar-checkout")
    seteoTabindexCarrito()
}

/*----------------------------------------
                CHECKOUT 
---------------------------------------- */
const seteoTabindexBody = () => {
    cerrarCheckout.setAttribute("tabIndex", -1);
    inputNombre.setAttribute("tabIndex", -1);
    inputMail.setAttribute("tabIndex", -1);
    radioEfectivo.setAttribute("tabIndex", -1);
    radioTarjeta.setAttribute("tabIndex", -1);
    checkboxEnvio.setAttribute("tabIndex", -1);
    checkboxDescuento.setAttribute("tabIndex", -1);
    botonSeguirComprando.setAttribute("tabIndex", -1);
    botonFinalizarCompra.setAttribute("tabIndex", -1);

    cerrarCarrito.setAttribute("tabIndex", -1);
    botonVaciar.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    
    cuerpo.removeAttribute("tabIndex", -1); 
    aside.removeAttribute("tabIndex", -1);
    botonComprar.removeAttribute("tabIndex", -1);
    firma.removeAttribute("tabIndex", -1);
}

const seteoTabindexCheckout = () => {
    cerrarCheckout.setAttribute("tabIndex", 1);
    inputNombre.setAttribute("tabIndex", 2);
    inputMail.setAttribute("tabIndex", 3);
    radioEfectivo.setAttribute("tabIndex", 4);
    radioTarjeta.setAttribute("tabIndex", 5);
    checkboxEnvio.setAttribute("tabIndex", 6);
    checkboxDescuento.setAttribute("tabIndex", 7);
    botonSeguirComprando.setAttribute("tabIndex", 8);
    botonFinalizarCompra.setAttribute("tabIndex", 9);

    cerrarCarrito.setAttribute("tabIndex", -1);
    botonVaciar.setAttribute("tabIndex", -1);
    botonComprar.setAttribute("tabIndex", -1);
    
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
    seteoTabindexCarrito()
}

botonSeguirComprando.onclick = () => {
    confirmarCompra.classList.remove("mostrar-checkout")
    overlay2.classList.remove("mostrar-checkout")
    menuCarrito.classList.remove("mostrar")
    overlay.classList.remove("mostrar")
    cuerpo.classList.remove("agrega-overflow")
    seteoTabindexBody()
}

botonFinalizarCompra.onclick = () => {
    // ENVIAR FORMULARIO
    seteoTabindexBody()
    alert("Compra finalizada con éxito!")
}

/*----------------------------------------
------------------------------------------
        VER COMO GRILLA O LISTA
------------------------------------------
---------------------------------------- */

/*----------------------------------------
            VER COMO LISTA ✅
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
            VER COMO GRILLA ✅
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

//console.log(cerrarCheckout)

/*----------------------------------------
------------------------------------------
    FILTROS DE BÚSQUEDA FUNCIONALIZADOS ✅
------------------------------------------
----------------------------------------*/
// PEQUEÑAS f(x) ✅
const ocultarDestino = (viaje) => {
    return viaje.classList.add("hidden")
    // viajesOcultos++
}
  
const mostrarDestino = (viaje) => {
    return viaje.classList.remove("hidden")
}

/* Male, en el agregado de la funcionalidad de contar los viajes filtrados tuve unos cuántos problemas,
por lo que llegué a una fórmula donde filtra bien las búsquedas, y no quise tocarla más. 
Aunque en el único caso que no funciona es cuando la búsqueda da "0" y muestra el último numero mostrado. 
Evidentemente hay algún error, porque si fijaba la variable inicial en 0 dentro de la función, 
siempre filtraba una unidad de menos...*/
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

// FILTROS ✅
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

// VERIFICA INPUT ✅
const hayAlgoEscritoEnElInput = () => {
    if (search.value) {
        return true
    }
    else {
        return false
    }
}
// console.log(hayAlgoEscritoEnElInput())

// COMPARA FILTRO CON INFO ✅
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

// INPUT ✅
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

// VERIFICA CATEGORIA ✅
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


// CHECKBOX CATEGORÍA ✅
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
// console.log(pasaFiltroCategoria())

// VERIFICA STARS ✅
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

// CHECKBOX STARS ✅
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
   FILTRAR VIAJES SEGÚN BÚSQUEDA ✅
--------------------------------*/
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

/* ------------------------------- 
   LIMPIAR TODOS LOS FILTROS ✅
--------------------------------*/
trash.onclick = () => {
    document.getElementById("filters-form").reset()
    for (let viaje of todosLosViajes) {
        viaje.classList.remove("hidden")
        mostrarViajes.textContent = `Mostrando 12 viaje(s) de 12`
    }
}


