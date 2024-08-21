import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Logo } from "../CartWidget/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const NavBar = () => {

  const {setTheme} = useContext(ThemeContext)

  return (
    <nav id="navbarPrincipal">
      <div id="cabecera">
        <Logo />
        <div className="botones">
          <Button nombre="botonNavBar">
            <Link className='LinkNB'to="/mi-ecommerce">Home</Link>
          </Button>
          <Button nombre="botonNavBar">
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Celulares">Celulares</Link>
          </Button>
          <Button nombre="botonNavBar">
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Computadoras">Computadoras</Link>
          </Button>
          <Button nombre="botonNavBar">
            <Link className='LinkNB'to="/mi-ecommerce/categoria/Televisiones">Televisiones</Link>
          </Button>
          <Button nombre="botonNavBar">
            <Link className='LinkNB'to="/mi-ecommerce/contacto">Contacto</Link>
          </Button>
          <button onClick={() => setTheme("dark")}>Dark mode</button>
          <button onClick={() => setTheme("light")}>Light mode</button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};
