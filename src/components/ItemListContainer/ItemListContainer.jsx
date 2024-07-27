 import React, { useEffect, useState } from 'react'
 import { getProducts } from '../../asyncmock'
 import { ItemList } from '../ItemList'
 import "./ItemListContainer.css"
 
 export const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)

    console.log("Mi estado", items);

    useEffect(() => {
        console.log("FETCH", fetch("http://fakestoreapi.com/products?limit=20")
        .then(res => res.json())
        .then(data => setItems(data))
        .finally(setCargando(false)))
        //Pedido de los datos
        //Esperar que lleguen
        //Guardarlos en el estado 'items'
        //Pasar pro 'porps' a ItemList
        // getProducts().then( prods => setItems(prods))
        // .catch(err => err)
        // .finally(() => setCargando(false))
    }, []);    

    if(cargando){
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <div className='contenedorILC'>
            <ItemList items={items}/>
        </div>   
    )
}