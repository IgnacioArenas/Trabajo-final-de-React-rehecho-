import React from "react";
import Logo from "../../assets/campeones/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/productos">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className="catalogo">
                <ul>
                    <li>
                        <Link to={"/campeones"} > CAMPEONES </Link>
                    </li>
                    <li>
                        <Link to={"/objetos"} > OBJETOS </Link>
                    </li>
                    <li>
                        <Link to={"/runas"} > RUNAS </Link>
                    </li>
                    <li>
                        <div className="cart">
                            <box-icon name='cart' type='solid' color='#ff0000' ></box-icon>
                            <span className="itemTotal"> 0 </span>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}