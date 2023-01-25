import React from "react";
import { data } from "../../context/Data/dataObjetos";

export const ObjetosLol = () => {
    return (
        <>
        <h1 className="titulo"> OBJETOS </h1>
        <div className="productos">
            {data.map(product => (
                <div className="producto">
                    <figure className="productoImg">
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className="productoFooter">
                        <h2 className="nombreProducto"> {product.nameProduct} </h2>
                        <p className="description"> {product.description}</p>
                        <p className="price"> ${product.price} </p>
                        <button className="boton"> Añadir al carrito </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}