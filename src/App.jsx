import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from 'react'
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/mi-ecommerce' element={<ItemListContainer greeting="Bienvenido al e-commerce JOGR" />}/>
          <Route path='/mi-ecommerce/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/mi-ecommerce/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/mi-ecommerce/contacto' element={<Contacto />}/>
          <Route path='/mi-ecommerce/*' element={<h1>Error 404 not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
