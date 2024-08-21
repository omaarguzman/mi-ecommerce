import { useContext } from "react"
import "./CartWidget.css"
import cartw from "./assets/cart.svg"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {

    const {carrito} = useContext(CarritoContext)

    return (
            <Link to="/mi-ecommerce/carrito">
                <div>
                    <img className="carrito" src={cartw} alt="Carrito de compras"/>
                    <span>{carrito.length}</span>
                </div>
            </Link>
    )
}