import React, { useContext } from "react";
import { data } from "../../context/Data/data";
import { DataContext } from "../../context/Dataprovider";

export const ProductoItem = () => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return (
        <>
        <h1 className="titulo"> PRODUCTOS </h1>
        <div className="productos">
            {data.map(product => (
                <div className="producto" key={product.nameProduct}>
                    <figure className="productoImg">
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className="productoFooter">
                        <h2 className="nombreProducto"> {product.nameProduct} </h2>
                        <p className="description"> {product.description} </p>
                        <p className="price"> ${product.price} </p>
                        <button className="boton" onClick={() => addCarrito(product.id) }> Añadir al carrito </button>
                    </div>
                </div>
            ))}
        </div>
        </> 
    )
}