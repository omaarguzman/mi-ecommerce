import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

const CarritoItem = ({producto}) => {

    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>{producto.cantidad}</p>
        <button onClick={() => eliminarProducto(producto.id)}>
            Eliminar producto
        </button>
    </div>
  )
}

export default CarritoItem