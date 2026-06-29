//import del css
import "../assets/css/Navbar.css"
//import el componente
/*import CartWidget from "./CartWidget"*/

//IMPORTO LA IMG DE SRC
import logo from "./imgs/logo.png"

const Navbar = (props) => {

    return(


        <nav className="navbar">
            <ul className="nav-left">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/historia.html">Catalogo</a></li>
                <li class="dropdown">
                    <a href="./pages/lugares.html">Por Categoría</a>

                    <ul class="dropdown-menu">
                        <li><a href="./pages/lugares/cork.html">Limpieza Facial</a></li>
                        <li><a href="./pages/lugares/dingle.html">Serums</a></li>
                        <li><a href="./pages/lugares/donegal.html">Cremas Faciales</a></li>
                        <li><a href="./pages/lugares/dublin.html">Cremas Corporales</a></li>
                        <li><a href="./pages/lugares/galway.html">Cuidado Capilar</a></li>
                        <li><a href="./pages/lugares/killarney.html">Velas y Aromas</a></li>
                    </ul>
                </li>

            </ul>
            <div className="logo1">
                <a href="./index.html"><img src="./imgs/logo.png" alt="Logo"/></a>
            </div>

            <ul className="nav-right">
                <li className="dropdown"><a href="./pages/curiosidades.html">Curiosidades</a>
                </li>

                <li class="dropdown"><a href="./pages/tips.html">Consejos</a>
                    <ul class="dropdown-menu">
                        <li><a href="./pages/alojamiento.html">Alojamiento</a></li>
                        <li><a href="./pages/comida.html">Comida</a></li>

                    </ul>
                </li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
            </ul>

        </nav>
    )

}

export default Navbar