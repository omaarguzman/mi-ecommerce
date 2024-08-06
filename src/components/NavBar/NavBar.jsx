import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Logo } from "../CartWidget/Logo";

export const NavBar = () => {
  const hizoClick1 = () => {
    console.log("Botón 'Productos 1' pulsado");
  };

  const hizoClick2 = () => {
    console.log("Botón 'Productos 2' pulsado");
  };

  const hizoClick3 = () => {
    console.log("Botón 'Productos 3' pulsado");
  };

  const hizoClick4 = () => {
    console.log("Botón 'Productos 4' pulsado");
  };

  const hizoClick5 = () => {
    console.log("Botón 'Productos 5' pulsado");
  };

  return (
    <nav id="navbarPrincipal">
      <div id="cabecera">
        <Logo />
        <div className="botones">
          <Button nombre="botonNavBar" funcion={hizoClick4}>
            <Link className='LinkNB'to="/mi-ecommerce">Home</Link>
          </Button>
          <Button nombre="botonNavBar" funcion={hizoClick1}>
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Celulares">Celulares</Link>
          </Button>
          <Button nombre="botonNavBar" funcion={hizoClick2}>
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Computadoras">Computadoras</Link>
          </Button>
          <Button nombre="botonNavBar" funcion={hizoClick3}>
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Televisiones">Televisiones</Link>
          </Button>
          <Button nombre="botonNavBar" funcion={hizoClick5}>
            <Link className='LinkNB'to="/mi-ecommerce/contacto">Contacto</Link>
          </Button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};
