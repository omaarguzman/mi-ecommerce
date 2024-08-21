import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useContext } from 'react'
import { Contacto } from "./components/Contacto";
import { Carrito } from "./components/Carrito";
import { CarritoContextProvider } from "./context/CarritoContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const {theme} = useContext(ThemeContext)
  return (
    <>
      <CarritoContextProvider>
        <div className={theme}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/mi-ecommerce' element={<ItemListContainer greeting="Bienvenido al e-commerce JOGR" />}/>
              <Route path='/mi-ecommerce/categoria/:categoria' element={<ItemListContainer/>}/>
              <Route path='/mi-ecommerce/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/mi-ecommerce/contacto' element={<Contacto />}/>
              <Route path='/mi-ecommerce/carrito' element={<Carrito/>}/>
              <Route path='/mi-ecommerce/*' element={<h1>Error 404 not found</h1>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </CarritoContextProvider>
    </>
  );
}

export default App;
