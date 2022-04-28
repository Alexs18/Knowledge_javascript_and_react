/**Fecth api normal no se puede usar fecth api en node */
let RootRender = document.getElementById("Root");

/**Peticion Normal */
fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response=> response.json())
        .then(datos=>{
            
            console.log(datos)
            datos.forEach(element=> {
                RootRender.innerHTML += `<ul>
                                            <li>
                                                ${element.id}
                                            </li>
                                            <li>
                                                ${element.name}
                                            </li>
                                            <li>
                                                ${element.username}
                                            </li>
                                        </ul>`
            })
            

        }).catch(error=>{
            console.log("Error en la petición");
        })


/**Peticion como funcion */

function PintarDatos(Data, DOM) {
    
    Data.forEach(result=>{
        DOM.innerHTML += `<ul>
        <li>
            ${result.id}
        </li>
        <li>
            ${result.name}
        </li>
        <li>
            ${result.username}
        </li>
    </ul>`
    })

}

function PeticionFecth(Parametro, Element) {
    
    fetch(Parametro)
    .then(response=> response.json())
    .then(datos=>{
        PintarDatos(datos, Element);
    })

}

/***De esta forma el codigo se ve un poco mas limpio y se puede comprender mejor*/
let Root2 = document.getElementById("Root2");
let URI = "https://jsonplaceholder.typicode.com/users/";
document.getElementById("Fecth2").addEventListener("click", ()=>{

    PeticionFecth(URI, Root2);

});

/**Peticion con parametros */
