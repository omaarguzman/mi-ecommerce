import React from 'react'
import './Button.css'

export const Button = ({texto, nombre, funcion, color, children}) => {
    
  return (
    <button style={{backgroundColor: color}} className={nombre} onClick={funcion}>{texto}{children}</button>
  )
}
