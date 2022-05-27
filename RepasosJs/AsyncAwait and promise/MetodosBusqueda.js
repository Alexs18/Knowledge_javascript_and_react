const valorbuscar = [
    {
        id:1,
        name:"alex"
    },
    {
        id:2,
        name:"linux"
    },
    {
        id:3,
        name:"alex"
    }
]

/**Encontrar el primer valor con las condiciones */

let encontrarvalor = valorbuscar.find(element=> element.name === "alex");
let {name} = encontrarvalor;
console.log(name);

/**Filtrar por valores, cada valor que sea igual a una condicion se guardara en un array */

let valoresfiltrados = valorbuscar.filter(element=> element.name === "alex");

console.log(valoresfiltrados)

/** */
let nuevoarray = [1,5,20]
/**includes, incluye un valor especifico dentro del arreglo */

let valorespecifico = nuevoarray.includes(20);
console.log(valorespecifico);

/**Incluye el index de un valor especifico */

let indexvalor = nuevoarray.indexOf(5);
console.log(indexvalor)