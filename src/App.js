import React from "react";
import { Header } from "./components/Header";
import 'boxicons';
import { ProductosLol } from "./components/productos";
import { CampeonesLol } from "./components/campeones";
import { ObjetosLol } from "./components/objetos";
import { RunasLol } from "./components/runas";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Routes> 
        <Route element={<Header/>}>
          <Route exact path="productos"  element={<ProductosLol/>}/>
          <Route exact path="campeones" element={<CampeonesLol/>}/>
          <Route exact path="objetos" element={<ObjetosLol/>}/>
          <Route exact path="runas" element={<RunasLol/>}/>
        </Route>
      </Routes>
    </div>
  );
}