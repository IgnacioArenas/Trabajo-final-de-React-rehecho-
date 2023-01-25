import React from "react";
import { data } from "../../context/Data/dataCampeones";

export const CampeonesLol = () => {
    return (
        <>
        <h1 className="titulo"> CAMPEONES </h1>
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