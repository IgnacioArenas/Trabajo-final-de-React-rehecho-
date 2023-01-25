import React, { useState, useEffect, createContext } from "react";
import { data } from "./Data/data";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const producto = data.items
        if (producto) {
            setProductos(producto)
        }else {
            setProductos([])
        }
    }, [])

    const addCarrito = (id) => {
        
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check || carrito.lenght === 0) {
            console.log(id)
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            setCarrito(prev => [...prev, ...data])
        }else {
            alert("El producto se ha añadido al carrito")
        }
    }

    useEffect(() => {
       const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"))
       if (dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("dataCarrito", JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                console.log(typeof item.price)
            return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const value = {
        productos : [productos],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>    
    )
}