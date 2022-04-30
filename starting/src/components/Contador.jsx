import { useState } from "react";

export default function Contador() {
    

    const [number, setNumber] = useState(0);
    
    const incrementar =()=>{
       // number++;
       setNumber(number+1)
    }

    return(
        <div>
            <h1>{number}</h1>
            <p>{number}</p>
            <button onClick={incrementar}>Precionar</button>
        </div>
    )
}