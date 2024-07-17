import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Button } from "./Button"

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
                <Button nombre="botonNavBar" texto="Productos 1" funcion={hizoClick1} />
                <Button nombre="botonNavBar" texto="Productos 2" funcion={hizoClick2} />
                <Button nombre="botonNavBar" texto="Productos 3" funcion={hizoClick3} />
                <Button nombre="botonNavBar" texto="Productos 4" funcion={hizoClick4} />
                <Button nombre="botonNavBar" texto="Productos 5" funcion={hizoClick5} />
            </div>
        </nav>
    )
}