 import React from 'react'
 import "./ItemListContainer.css"
 
 export const ItemListContainer = ({greeting}) => {

    return (
        <div className='contenedorILC'>
            <h1>{greeting}</h1>
        </div>   
    )
}