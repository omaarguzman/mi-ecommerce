import React, { useContext } from 'react'
import './CarritoItem.css'
import { CarritoContext } from '../context/CarritoContext'

const CarritoItem = ({producto}) => {

    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div>
      <div className='checkoutDiv'>
        <img src={producto.imagen} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <button onClick={() => eliminarProducto(producto.id)}>
            Eliminar producto
        </button>
      </div>
    </div>
  )
}

export default CarritoItem