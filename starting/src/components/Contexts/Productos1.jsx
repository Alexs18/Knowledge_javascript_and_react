import React from 'react'
import Producto from './Producto'

const productos1 = [
    
    {
    id:"prod-1",
    name:"Producto 1",
    precio:300
    },
    {
        id:"prod-2",
        name:"Producto 2",
        precio:300
    },
]

export default function productos({setCarrito, Carrito}) {
  return (
    <div>
        {
            productos1.map(producto=>(
                <Producto key={producto.id} producto={producto}/>
            ))
        }
    </div>
  )
}
