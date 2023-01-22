import React from "react";
import Aatrox from "../../assets/campeones/Aatrox.jpg";
import Garen from "../../assets/campeones/Garen.jpg";
import Trundle from "../../assets/campeones/Trundle.jpg";

export const CampeonesLol = () => {
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
        </div>
        </>
    )
}