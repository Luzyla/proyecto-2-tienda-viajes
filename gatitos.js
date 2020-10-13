/*----------------------------------------
------------------------------------------
CÓDIGO DE LOS GATITOS PARA BASE DE FILTROS
------------------------------------------
----------------------------------------*/


const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");

// VERIFICA SI HAY ALGO ESCRITO EN EL INPUT Y SI COINCIDE CON ALGUNA TARJETA
const pasaFiltroInput = (card) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
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

// VERIFICA SI HAY CHECKBOX SELECCIONADO Y SI COINCIDE CON ALGUNA TARJETA
const pasaFiltroCheckbox = (card) => {
  if (hayAlgunCheckBoxChequeado()) {
    if (compararColorConTarjeta(card)) {
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

// VERIFICA SI HAY RADIO SELECCIONADO Y SI COINCIDE CON ALGUNA TARJETA
const pasaFiltroRadio = (card) => {
  if (hayAlgunRadioChequeado()) {
    if (compararSexoConTarjeta(card)) {
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

// VERIFICA LOS TRES FILTROS A LA VEZ PARA EJECUTAR LA BÚSQUEDA
const pasaFiltros = (card) => {

  if (pasaFiltroInput(card) && pasaFiltroCheckbox(card) && pasaFiltroRadio(card)) {
    return true
  }
  else {
    return false
  }

}

// VERIFICA CADA TARJETA SEGÚN EL RADIO CHEQUEADO PARA VER SI COINCIDE
const compararSexoConTarjeta = (card) => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      if ((radio.value === card.dataset.sexo) || (radio.value === "i")) {
        return true
      }
    }
  }
  return false
}

// VERIFICA CADA TARJETA SEGÚN EL CHECKBOX CHEQUEADO PARA VER SI COINCIDE
const compararColorConTarjeta = (card) => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.color || checkbox.value === "todos") {
        return true
      }
    }
  }
  return false
}

const ocultarTarjeta = (card) => {
  return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
   return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      
      mostrarTarjeta(card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
}

const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}

const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}

const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      return true
    }
  }
  return false
}

const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true 
  }
  else {
    return false
  }
}

// FILTROS
filtroBusqueda.oninput = () => {
  filtrarTarjetas()
}

for (let checkbox of filtroColor) {
  checkbox.oninput = () => {
    filtrarTarjetas()
  }
}

for (let radio of filtroSexo) {
  radio.oninput = () => {
    filtrarTarjetas()
  }
}
     
