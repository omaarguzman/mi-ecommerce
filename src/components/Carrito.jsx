import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import CarritoItem from './CarritoItem'
import { Link } from 'react-router-dom'

export const Carrito = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext)

  return (
    <div>
      {carrito.map(e => {
          return (
            <CarritoItem key={e.id} producto={e} />
          )
        })}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to='/mi-ecommerce/checkout'>Finalizar compra</Link>
    </div>
  )
}
