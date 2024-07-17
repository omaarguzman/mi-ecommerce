import React from 'react'
import './Button.css'

export const Button = ({texto, nombre, funcion}) => {
    
  return (
    <button className={nombre} onClick={funcion}>{texto}</button>
  )
}
