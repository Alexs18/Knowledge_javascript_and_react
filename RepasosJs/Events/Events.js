/**Primera forma de pasar un evento */
/**Crear una funcion y pasarla desde el html*/

function EventOnblur(event) {
    console.log(event)
}

/**Segunda Forma agregar el evento Listener */
document.getElementById("Evento1").addEventListener("blur", EventOnblur);


/**Tercera Opción llamr al evento listener desde una arrow function*/
/**Evento blur cuando un elemento esta en foco, pero este se va */

let Evento1 = document.getElementById("Evento1");
Evento1.addEventListener("blur", (Event)=>{
    Event.target.style.background = "red";
    console.log(Event.target);
    Event.target.value="LinuxDev";
    console.log(Event.type)
});

/**Asociación a un texto */
let Evento2 = document.getElementById("LinuxText").onblur=(event)=>{
    event.target.style.width ="50px"
}

/**Evento de Mouse*/
function Mouse(Event) {
    console.log(Event);
    Event.target.style.background="blue"
}

let EventoMouse = document.getElementById("Evento2");

EventoMouse.addEventListener("mouseover", Mouse)