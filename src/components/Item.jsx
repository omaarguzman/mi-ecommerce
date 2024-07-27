import React, { useState } from 'react'
import { ItemCount } from './Itemcount/ItemCount'
import { Button } from './NavBar/Button'
import ItemDetailContainer from './ItemDetailContainer'

export const Item = ({ producto }) => {

  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalle = () => {
    setIsVisible(true)
  }

  return (
    <div className='contenedor'>
        <h3>{producto.title}</h3>
        <img className='imagenItem' src={producto.image} alt="Imagen del producto" />
        <p>$ {producto.price}</p>
        <p>{producto.category}</p>
        <Button color="blue" texto="Ver detalle..." funcion={mostrarDetalle}>
          { /* Aquí se manda la propiedad por 'children' automáticamente, y hay que cerrar la etiqueta 'Button' correctamente */ }
        </Button>
        {
          isVisible ? <ItemDetailContainer id={producto.id} />: <p>Dale click al botón</p>
        }
        <ItemCount />
    </div>
  )
}
