import Dominacion from "../../assets/runas/Dominacion.jpg";
import Precision from "../../assets/runas/Precision.jpg";
import Valor from "../../assets/runas/Valor.jpg";

export const RunasLol = () => {
    return (
        <>
        <div>
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