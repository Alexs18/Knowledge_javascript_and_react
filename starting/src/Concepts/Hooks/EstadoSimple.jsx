import {useState} from 'react'

export default function EstadoSimple() {
  
    const [value1, setValue] = useState(1);
    
    function ChangeValue(saludo) {
        setValue(value1+1);
        console.log(saludo)
    }
    
    return (
    <>
        <p>Mi valor es: {value1}</p>
        <button onClick={ChangeValue}>Change the value</button>
    </>
  )
}
