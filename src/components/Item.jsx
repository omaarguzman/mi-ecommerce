import React, { useState } from 'react'
import { ItemCount } from './Itemcount/ItemCount'
import { Button } from './NavBar/Button'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {

  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalle = () => {
    setIsVisible(true)
  }

  return (
    <div className='cardIDC'>
        <h3 className='itemH3'>{producto.nombre}</h3>
        <img className='imagenItem' src={producto.imagen} alt="Imagen del producto" />
        <p className='itemP'>$ {producto.precio}.00</p>
        <p className='itemP'>{producto.categoria}</p>
        <Button color="#7e83fb" funcion={mostrarDetalle}>
          <Link id='linkButton' to={`/mi-ecommerce/detalle/${producto.id}`}>Ver detalle</Link>
        </Button>
        {
          isVisible ? <ItemDetailContainer id={producto.id} />: <p className='itemP'>Dale click al botón</p>
        }
        <ItemCount />
    </div>
  )
}
