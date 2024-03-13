//alert("Hola este es mi Javascript");
//let nombre = "María";

// SELECCIONAR ELEMENTOS
let contenidoTitulo = "Marta"; 
let titulo = document.querySelector(".logo .fuenteacento");

titulo.innerHTML = contenidoTitulo; 

//CONDICIONALES 
let textoTitulo = titulo.innerText; 
console.log(textoTitulo); 

if (textoTitulo == "Yo") { 
    titulo.innerHTML = "María"; 
} else { 
    console.log("no se cumple"); 
}

//FUNCIONES 
let nombre1 = "Ani"; 
let ciudad1 = "Bs As"; 
let gusto1 = "chocolate"; 
let parrafo = document.querySelector(".parrafo1"); 
function cambiarTexto(nombre1, ciudad1, gusto1) {
    let contenido = `Me llamo ${nombre1}, nací en ${ciudad1} y vivo en Lima. Me gusta el ${gusto1} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
    return contenido;
} 

parrafo.innerText= cambiarTexto("María", ciudad1, gusto1);

//menu
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

//formulario
const form = document.getElementById("form");
const nomb = document.getElementById("nombre");
const parraf = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parraf.innerHTML = "";

  if (nomb.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parraf.innerHTML = warnings;
  } else {
    parraf.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
