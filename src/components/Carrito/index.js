import React from "react";
import 'boxicons';
import { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { data } from "../../context/Data/data";
import { ProductoItem } from "../productos/ProductoItem";

export const Carrito = () => {

    const value = useContext(DataContext);
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    const removeProducto = id => {
        if(window.confirm("¿Quitar el producto?")) {
            carrito.forEach((item, index) => {
                if(item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                } 
            })
        }
        setCarrito([...carrito])
    }

    return (
        <>
        <h1 className="titulo"> SU CARRITO </h1>
        <div className="carritos">
            <div className="carrito">
                {carrito.map(product => (
                    <div className="carritoCenter" key={product.nameProduct}>
                        <div className="carritoItem">
                            <figure className="productoImg">
                                <img src={product.img} alt={product.nameProduct} />
                            </figure>
                            <div className="productoFooter">
                                <h2 className="nombreProducto"> {product.nameProduct} </h2>
                            </div>
                        </div>
                        <div className="removeItem" onClick={ () => removeProducto(producto.id)}>
                            <box-icon name="trash" color="white"></box-icon>
                        </div>
                    </div>
                ))}
                <div className="carritoFooter">
                    <h3 className="total"> Total: {total} </h3>
                    <button className="boton"> Payment </button>
                </div>
            </div>
        </div>
        </>
    )
}