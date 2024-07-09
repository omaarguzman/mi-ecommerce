import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

    const hizoClick1 = () => {
        console.log("Botón 'Productos 1' pulsado");
    }
    
     const hizoClick2 = () => {
        console.log("Botón 'Productos 2' pulsado");
     }
    
     const hizoClick3 = () => {
        console.log("Botón 'Productos 3' pulsado");
     }

     const hizoClick4 = () => {
        console.log("Botón 'Productos 4' pulsado");
     }

     const hizoClick5 = () => {
        console.log("Botón 'Productos 5' pulsado");
     }

    return (
        <nav id="navbarPrincipal">
            <div id="cabecera">
                <h3>My Ecommerce - JOGR</h3>
                <CartWidget />
            </div>
            <div className="botones">
                <button className="boton" onClick={hizoClick1}>Productos 1</button>
                <button className="boton" onClick={hizoClick2}>Productos 2</button>
                <button className="boton" onClick={hizoClick3}>Productos 3</button>
                <button className="boton" onClick={hizoClick4}>Productos 4</button>
                <button className="boton" onClick={hizoClick5}>Productos 5</button>
            </div>
        </nav>
    )
}