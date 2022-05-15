import React, {useContext} from 'react'
import {CartContext} from "./Context"

export default function Producto({producto}) {

  const {carrito, setCarrito} = useContext(CartContext);
 
  const AgregarAlCarrito =()=>{
      setCarrito([...carrito, producto])
  }
  return (
    <article>
        <h1>{producto.name}</h1>
        <p>{producto.price}</p>
        <button onClick={AgregarAlCarrito}>Agregar al carrito</button>
    </article>
  )
}
