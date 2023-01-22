import Hidra from "../../assets/objetos/Hidra.jpg";
import Malla from "../../assets/objetos/Malla.jpg";
import Martillo from "../../assets/objetos/Martillo.jpg";

export const ObjetosLol = () => {
    return (
        <>
        <div className="productos">
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
        </div>
        </>
    )
}