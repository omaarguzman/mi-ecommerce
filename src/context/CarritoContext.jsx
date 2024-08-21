import { createContext, useState } from "react";

export const CarritoContext = createContext()

export const CarritoContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addToCart = (prod) => {
        setCarrito([...carrito, prod])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(e => e.id !== id)
        setCarrito(nuevoCarrito)
    }

    return (
        <CarritoContext.Provider value={{carrito, setCarrito, addToCart, vaciarCarrito, eliminarProducto}}>
            {children}
        </CarritoContext.Provider>
    )
}