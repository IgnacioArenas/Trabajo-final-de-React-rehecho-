import React, { useContext } from "react";
import { data } from "../../context/Data/data";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLol = () => {

    const value = useContext (DataContext)
    const [productos] = value.productos

    return (
        <>
        <h1 className="titulo"> PRODUCTOS </h1>
        <div className="productos">
            <ProductoItem/>
        </div>
        </>
    )
}