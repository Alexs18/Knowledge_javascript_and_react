import React, { useEffect, useState } from 'react'

export default function Effects() {
  //espacio para ejecutar los hooks
  
  //recibe una función de cualquier tipo y un arreglo,

  const [change, setChange] = useState(false);
    
    useEffect(()=>{
      console.log("Efcto")
    }, [])   
    
  //Termina el espacio
    return (
    <div>
      <button onClick={()=>{setChange(!change)}}>Efecto</button>
    </div>
  )
}
