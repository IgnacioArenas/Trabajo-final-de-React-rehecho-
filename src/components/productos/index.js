import React from "react";
import Aatrox from "../../assets/campeones/Aatrox.jpg";
import Garen from "../../assets/campeones/Garen.jpg";
import Trundle from "../../assets/campeones/Trundle.jpg";
import Hidra from "../../assets/objetos/Hidra.jpg";
import Malla from "../../assets/objetos/Malla.jpg";
import Martillo from "../../assets/objetos/Martillo.jpg";
import Dominacion from "../../assets/runas/Dominacion.jpg";
import Precision from "../../assets/runas/Precision.jpg";
import Valor from "../../assets/runas/Valor.jpg";

export const ProductosLol = () => {
    return (
        <>
        <div className="productos">
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Aatrox} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Aatrox </h1>
                    <p> Campeón </p>
                    <p className="price"> 100 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Garen} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Garen </h1>
                    <p> Campeón </p>
                    <p className="price"> 20 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Trundle} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Trundle </h1>
                    <p> Campeón </p>
                    <p className="price"> 50 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Hidra} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Hidra </h1>
                    <p> Objeto </p>
                    <p className="price"> 10 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Malla} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Malla </h1>
                    <p> Objeto </p>
                    <p className="price"> 10 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Martillo} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Martillo </h1>
                    <p> Objeto </p>
                    <p className="price"> 6 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Dominacion} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Dominación </h1>
                    <p> Runa </p>
                    <p className="price"> 10 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Precision} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Precisión </h1>
                    <p> Runa </p>
                    <p className="price"> 10 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
            <div className="producto">
                <a href="">
                    <div className="productoImg">
                        <img src={Valor} />
                    </div>
                </a>
                <div className="productoFooter">
                    <h1> Valor </h1>
                    <p> Runa </p>
                    <p className="price"> 10 RP </p>
                </div>
                <div className="button">
                    <button className="boton"> Añadir al carrito </button>
                </div>
            </div>
        </div>
        </>
    )
}