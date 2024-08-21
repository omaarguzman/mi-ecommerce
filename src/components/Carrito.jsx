import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import CarritoItem from './CarritoItem'

export const Carrito = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext)

  return (
    <div>
      {carrito.map(e => {
          return (
            <CarritoItem key={e.id} producto={e} />
          )
        })}
        <button onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
    </div>
  )
}
