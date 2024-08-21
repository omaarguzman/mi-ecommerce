import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { ItemCount } from './Itemcount/ItemCount';

export const ItemDetail = ({prod}) => {

    const {carrito, addToCart} = useContext(CarritoContext)

    const [id, setId] = useState(0);

    console.log(carrito);

    const mostrarSiguiete = () => {
      setId(id + 1);
    };

    const mostrarAnterior = () => {
      setId(id - 1);
    };

    const handleAddToCart = (cantidad) => {
        const prodConCantidad = {...prod, cantidad: cantidad}
        addToCart(prodConCantidad)
    }

    return (
        <div className="cardIDC">
            <h3>{prod.nombre}</h3>
            <p>{prod.precio}</p>
            <p id="pDesc">{prod.descripcion}</p>
            <div className="botonesIDC">
                <button onClick={mostrarAnterior}>Ver anterior</button>
                <button onClick={mostrarSiguiete}>Ver siguiente</button>
                <ItemCount handleAddToCart={handleAddToCart} />
            </div>
        </div>
  )
}
