"use strict";

document.addEventListener("DOMContentLoaded", () => { //Cargamos el DOM
    
  const puesto = document.querySelector("#puesto");
  const enviar = document.querySelector("#enviar");
  const respuesta = document.querySelector("#respuesta");

  enviar.addEventListener("click", () => { //Arrow function con un evento click
    const valorPuesto = puesto.value;

    switch (valorPuesto.toLowerCase()) {
      case "ingeniero":
        respuesta.textContent = "Gana 2700€";
        break;
      case "matematico":
        respuesta.textContent = "Gana 2500€";
        break;
      case "profesor":
        respuesta.textContent = "Gana 2000€";
        break;
      default:
        respuesta.textContent = "Ningún valor válido fue seleccionado.";
    }
  });
});
