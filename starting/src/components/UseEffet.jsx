import React, { useEffect, useState } from 'react'

export default function Effects() {
  //espacio para ejecutar los hooks
  
  //recibe una función de cualquier tipo y un arreglo,

  const [change, setChange] = useState(false);
  const [movies, setMovies] = useState([]);
    
    //useEffect(()=>{
      //console.log("Efcto")
    //}, [change])   
    
  //Termina el espacio
  //Usaremos useEffect para cambiar algun valor del estado

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json())
      .then(data=>{
        console.log(data)
        setMovies(data)
      })
    }, [])
    //si las dependencias son vacias solo se ejecuta una vez)

    return (
    <div>
      <button onClick={()=>{setChange(!change)}}>Efecto</button>
      {movies.map(movies=>(
        <article>
          <h2>{movies.id}</h2>
          <p>{movies.name}</p>
        </article>
      ))}
    </div>
  )
}
