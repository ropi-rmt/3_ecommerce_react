
import "../assets/css/Footer.css"

import instagram from "../assets/imgs/instagram.png"
import twitter from "../assets/imgs/twitter.png"
import youtube from "../assets/imgs/youtube.png"
import whatsapp from "../assets/imgs/wapp.png"





const Footer = (props) => {

return(
<>
    <footer className="footer">
        <h2> Mis Redes Sociales</h2>
        <ul>
                <li> <a href="https://www.instagram.com/turefugiolunar" target="_blank"><img className="rs" src={instagram} alt="Instagram"/></a></li>
                <li> <a href="https://x.com/"> <img className="rs" src={twitter} alt="Twitter"/></a></li>
                <li><a href="https://www.youtube.com/"><img className="rs" src={youtube} alt="YouTube"/></a></li>
                <li><a href="https://web.whatsapp.com/"><img className="rs" src={whatsapp} alt="WhatsApp"/></a></li>
            </ul>

        <h2>Creado por Ropi</h2>
    </footer> 
    </>

)



}

export default Footer