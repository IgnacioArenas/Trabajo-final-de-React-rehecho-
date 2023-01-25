import React from "react";
import { Header } from "./components/Header";
import 'boxicons';
import { CampeonesLol } from "./components/campeones";
import { ObjetosLol } from "./components/objetos";
import { RunasLol } from "./components/runas";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/Dataprovider";
import { ProductoItem } from "./components/productos/ProductoItem";
import { Carrito } from "./components/Carrito";

export function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes> 
          <Route exact path="/*" element={<Header/>}>
            <Route exact path="/*"  element={<ProductoItem/>}/>
            <Route exact path="campeones" element={<CampeonesLol/>}/>
            <Route exact path="objetos" element={<ObjetosLol/>}/>
            <Route exact path="runas" element={<RunasLol/>}/>
            <Route exact path="carrito" element={<Carrito/>}/>
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
}