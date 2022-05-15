import React from 'react'

/**Funciones de ejemplo con props*/
function propsExamples(props) {
    
    return (
    <div>
        <h1>hola {props.name}</h1>
        <h2>Hi once again {props.skills}</h2>
    </div>
  )
}

/**un objeto de exportaciones */

function propsExamples1(props) {
    
    const datosprops = props.values.map((values, index, newarray)=>{
        return(
            <>
               <li key={index}>
                   Nombres:{values.nombre} Apellidos{values.apellido}
               </li>
            </>
        )
    });
    return(
        <>
            <ul>
                {datosprops}
            </ul>
        </>

    )
}

function propsExamples2({Peliculas}) {
    
    let pelis = Peliculas.map(value=>{
        return(
            <>
                <li>
                    {value.Title}
                </li>
                <li>
                    {value.Category}
                </li>
            </>
        )
    })
    return(
        <>
            <ul>
                {pelis}
            </ul>
        </>
    )
}

const Funcionesexample={
    Funcion1:propsExamples,
    Funcion2:propsExamples1,
    Funcion3:propsExamples2
}

/**Exportaciones */
export default Funcionesexample;
