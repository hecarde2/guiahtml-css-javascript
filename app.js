// Función para cambiar texto
function cambiarTexto(){


/* Guardamos el párrafo */
let texto =
document.getElementById("mensaje");


/* Cambia contenido */
texto.innerHTML=
"El texto cambió con JavaScript";

}




// Función esconder imagen
function ocultarImagen(){


/* Captura la imagen */
let imagen =
document.getElementById("foto");



/* Si está oculta */
if(
imagen.style.display==="none"
){

/* mostrar */
imagen.style.display="block";

}
else{

/* ocultar */
imagen.style.display="none";

}


}