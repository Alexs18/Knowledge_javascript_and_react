import React, {useState, createContext} from 'react'
import Navar from './Navar'
import Productos from './Productos1'

export const CartContext = createContext()

export default function Context() {

  const [carrito, setCarrito] = useState([])

  return (
         <CartContext.Provider value={{
                carrito,
                setCarrito
           }}>
              <Navar carrito={carrito}/>
              <Productos/>
              <button onClick={()=>{
                setCarrito([...carrito, {name:"pRODUCTO"}])
              }}>
                Agregar contenido al carrito
              </button>

         </CartContext.Provider>
  )
}
