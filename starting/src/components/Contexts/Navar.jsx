import React from 'react'

export default function Navar({carrito}) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Link1 </li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>

        <li>Carrito: {carrito.length}</li>
      </ul>
    </nav>
  )
}
