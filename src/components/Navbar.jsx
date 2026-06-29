//import del css
import "../assets/css/Navbar.css"
//import el componente
import CartWidget from "./CartWidget"

//IMPORTO LA IMG DE SRC
import logo from "../assets/logo-shop.png"

const Navbar = (props) => {
//logica
    return(
        
       /* <nav className='nav-container'>
            <a href="" className="anchor-nav">
                <img alt='logo' src={logo} className="logo"/>
            </a>
            <a href="" className="anchor-nav">Nuevos</a>
            <a href="" className="anchor-nav">Ofertas</a>
            <a href="" className="anchor-nav">Mas Vendidos</a>
            <CartWidget compra={15} cart={props.cart}/>
        </nav>*/

        <nav className="navbar">
            <ul className="nav-left">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/historia.html">Historia de Irlanda</a></li>
                <li class="dropdown">
                    <a href="./pages/lugares.html">Qué Visitar</a>

                    <ul class="dropdown-menu">
                        <li><a href="./pages/lugares/cork.html">Cork</a></li>
                        <li><a href="./pages/lugares/dingle.html">Dingle</a></li>
                        <li><a href="./pages/lugares/donegal.html">Donegal</a></li>
                        <li><a href="./pages/lugares/dublin.html">Dublín</a></li>
                        <li><a href="./pages/lugares/galway.html">Galway</a></li>
                        <li><a href="./pages/lugares/killarney.html">Killarney</a></li>
                        <li><a href="./pages/lugares/kilkenny.html">Kilkenny</a></li>
                        <li><a href="./pages/lugares/sligo.html">Sligo</a></li>
                        <li><a href="./pages/lugares/westport.html">Westport</a></li>
                    </ul>
                </li>

            </ul>
            <div className="logo1">
                <a href="./index.html"><img src="./assets/Logo-1.png" alt="Logo"/></a>
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