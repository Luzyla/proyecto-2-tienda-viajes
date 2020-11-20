Querida Lu, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Noto muchos divs innecesarios o repetidos (un header sin clase y dentro un div con la clase header que se podria borrar, muchos ejemplos asi). Usas bien las etiquetas aria y los atributos alt. 

Como tu carrito no esta oculto, sino solamente corrido a la derecha, una persona que navega tu web con el teclado puede verlo al mover el foco si tiene seleccionado un producto. Tambien ocurre en algunos celulares. Podemos ponerle a todos esos elementos

```css
opacity: 0;
visibility: hidden
```

Y quitarle estas opciones cuando el usuario hace click en "mostrar carrito". 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Me gusta mucho como resolviste los filtros responsive y la reutilizacion de codigo. 

Como bien mencionas, tu contador tiene una falla cuando son 0 productos. Tu codigo esta bien, pero estas llamando a la funcion en el lugar incorrecto. Deberias hacerlo en filtrarDestinos y no en pasaTodosLosFiltros. Con ese cambio, ya podes iniciar la variable viajesFiltrados en 0 y tu codigo funcionara correctamente. 

```js
const filtrarDestinos = () => {
  viajesFiltrados = 0;
  for (let viaje of todosLosViajes) {
    if (pasaTodosLosFiltros(viaje)) {
      mostrarDestino(viaje);
      viajesFiltrados++;
    } else {
      ocultarDestino(viaje);
    }
  }
  contarViajesFiltrados()
};
```

### Carrito

Tu carrito esta muy bien! A nivel estetico, quiza creo que haria falta prestarle mas atencion al modal de vaciar, ya que no esta perfectamente centrado. Veo que no funciona ni borrar un producto ni modificar la cantidad: si queres ayuda con eso no dejes de escribirme. 

### Checkout

Como tu etiqueta form se cierra antes de los botones de enviar y seguir comprando, tu formulario propiamente nunca se envia (y podemos finalizar la compra incluso sin haber completado los campos requeridos). Un formulario no puede cerrarse sin incluir el boton de envio. 

Los numeros de tu checkout no tienen mucho sentido. Eso es porque estas usando la variable totalProductosMiniatura para calcular los totales, pero esa funcion empieza en 0. Por lo que si agrego recargo, el total se convierteen el recargo sin el subtotal. Revisa eso -no quiero darte el codigo porque estas muy cerca - y cualquier cosa me escribis. 

### Misc 

Tu HTML esta muy bien. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos. 

No es mi idea enfocarme en el responsive, aunque debo comentar que en general lo que resolviste lo hiciste muy bien. En todas tus resoluciones tu web se comporta correctamente, excepto cuando tenemos tarjetas en columna y nos vamos a resoluciones intermedias o de celular. Valdria la pena corregir eso. 

Lo que menciono a nivel general del JS es que la cantidad de comentarios y console log dificultan la lectura. Obviamente yo como docente no tengo problema, pero tene en cuenta que para trabajos entregados se espera que no haya ningun comentario a menos que realmente sirva al lector (por ejemplo, para aclarar de que seccion es el codigo o para aclarar el proposito de alguna funcion compleja), pero todos los demas comentarios que fuiste dejando para vos misma se deben borrar. Lo mismo los console.log. Estos detalles suman mucho a la hora de presentar codigo para entrevistas, asi que vale la pena invertir desde ahora en eso. 

Tenes muchos y muy buenos commits, y ni hablar de la calidad de tu README. Este es un trabajo del que estar muy orgullosa. 

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento.
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅  Reutilización de estilos.
✅  Funciones pequeñas.
✅ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 9



