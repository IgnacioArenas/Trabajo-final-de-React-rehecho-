import React from "react";
import Logo from "../../assets/campeones/Logo.png";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <Link to="/">
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
                            <Link to={"/carrito"} className="cart">
                                <box-icon name='cart' type='solid' color='#ff0000' ></box-icon>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <Outlet/>
        </div>
        
    )
}