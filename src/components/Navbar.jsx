
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
                <li><NavLink href="./index.html">Inicio</NavLink></li>
                <li><NavLink href="./pages/historia.html">Catalogo</NavLink></li>
                <li className="dropdown">
                    <NavLink href="./pages/lugares.html">Por Categoría</NavLink>

                    <ul className="dropdown-menu">
                        <li><NavLink href="./pages/lugares/cork.html">Limpieza Facial</NavLink></li>
                        <li><NavLink href="./pages/lugares/dingle.html">Serums</NavLink></li>
                        <li><NavLink href="./pages/lugares/donegal.html">Cremas Faciales</NavLink></li>
                        <li><NavLink href="./pages/lugares/dublin.html">Cremas Corporales</NavLink></li>
                        <li><NavLink href="./pages/lugares/galway.html">Cuidado Capilar</NavLink></li>
                        <li><NavLink href="./pages/lugares/killarney.html">Velas y Aromas</NavLink></li>
                    </ul>
                </li>

            </ul>
            <div className="logo">
                <NavLink tp="/"><img src={logo} alt="Logo"/></NavLink>
            </div>

            <ul className="nav-right">
                <li className="dropdown"><NavLink href="./pages/curiosidades.html">Nosotros</NavLink>
                </li>

                <li className="dropdown"><NavLink href="./pages/tips.html">Contacto</NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink href="./pages/alojamiento.html">Alojamiento</NavLink></li>
                        <li><NavLink href="./pages/comida.html">Comida</NavLink></li>

                    </ul>
                </li>
                <li><CartWidget compra={15} /></li>
            </ul>

        </nav>
    )

}

export default Navbar