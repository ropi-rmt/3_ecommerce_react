
import "../assets/css/Navbar.css"

import logo from "../assets/imgs/logo.png"

import CartWidget from "./CartWidget"
import Badge from 'react-bootstrap/Badge';

import {NavLink} from "react-router-dom"

//NavLink es para rutas activas

const Navbar = (props) => {

    return(


        <nav className="navbar">
            <ul className="nav-left">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/catalogo">Catalogo</NavLink></li>
                <li className="dropdown">
                    <NavLink href="./pages/lugares.html">Por Categoría</NavLink>

                    <ul className="dropdown-menu">
                        <li><NavLink to="/category/limpieza">Limpieza Facial</NavLink></li>
                        <li><NavLink to="/category/serum">Serums</NavLink></li>
                        <li><NavLink to="/category/cremaFacial">Cremas Faciales</NavLink></li>
                        <li><NavLink to="/category/cremaCorporal">Cremas Corporales</NavLink></li>
                        <li><NavLink to="/category/cabello">Cuidado Capilar</NavLink></li>
                        <li><NavLink to="/category/combo">Combos</NavLink></li>
                    </ul>
                </li>

            </ul>
            <div className="logo">
                <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
            </div>

            <ul className="nav-right">
                <li className="dropdown"><NavLink to="/nosotros">Nosotros</NavLink>
                </li>

                <li className="dropdown"><NavLink to="/contacto">Contacto</NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/contacto" >Escribinos!</NavLink></li>
                        <li><a href="https://web.whatsapp.com/">Nuestro Whatsapp!</a></li>

                    </ul>
                </li>
                <li><NavLink to="/cart" ><CartWidget /></NavLink></li>
            </ul>

        </nav>
    )

}

export default Navbar