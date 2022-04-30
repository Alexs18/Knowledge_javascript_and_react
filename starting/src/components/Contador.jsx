import { useState } from "react";

export default function Contador() {
    

    //el number viene siendo una variable especial
    // el estado es un arreglo 
    // estos valores pueden llamarse como queramos
    const stado = useState(1); //Registra un valor de estado
    const number = stado[0]; //valor almacenado en el estado
    const setNumber = stado[1]; // funcion que modifica el estado
    //const [number, setNumber] = useState(0);

    const incrementar =()=>{
       // number++;
       setNumber(number+1);
       console.log(number)
       
    }

    return(
        <div>
            <h1>{number}</h1>
            <p>{number}</p>
            <button onClick={incrementar}>Precionar</button>
        </div>
    )
}