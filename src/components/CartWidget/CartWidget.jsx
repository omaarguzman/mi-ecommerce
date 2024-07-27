import "./CartWidget.css"
import cartw from "./assets/cart.svg"

export const CartWidget = () => {
    return (
        <div>
            <img className="carrito" src={cartw} alt="Carrito de compras"/>
        </div>
    )
}