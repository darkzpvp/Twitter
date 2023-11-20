"use strict";

document.addEventListener("DOMContentLoaded", () => { //Definimos el DOM
    const puesto = document.querySelector("#puesto");
    const enviar = document.querySelector("#enviar");
    const respuesta = document.querySelector("#respuesta");

    const jobs = [ //Definimos el array
        { job: "Ingeniero", salary: 3000 },
        { job: "Profesor", salary: 2000 },
        { job: "Matematico", salary: 2300 }
    ];

   
    function seleccion() { //Definimos la funcion
        const valorseleccionado = puesto.value.toLowerCase(); //La variable es lo que el usuario pasa por parámetro 
        const trabajoseleccionado = jobs.find(job => job.job.toLowerCase() === valorseleccionado); //Se usa la funcion find para encontrar en el array el valor seleccionado

        if (trabajoseleccionado) { //Si el trabajo seleccionado es correcto, se imprime, de lo contrario aparecerá un error
            respuesta.textContent = `Puesto: ${trabajoseleccionado.job}, Salario: ${trabajoseleccionado.salary}`;
        } else {
            respuesta.textContent = "Puesto no encontrado. Por favor, elija un puesto válido.";
        }
    }

    enviar.addEventListener("click", seleccion); //Evento listener con un click y la función

  
   
});
