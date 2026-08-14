import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/EmptyCart.css"

const EmptyCart = () => {
  return (
       <div className="vacio">
        <img src='https://i.postimg.cc/266QGDJz/empty-cart.png' alt='error'/>
         <div>
                <h2 className="">Tu carrito está vacío</h2>
                <p className="">
                    Todavía no agregaste productos. ¡Descubrí nuestro catálogo!
                </p>
            </div>
        <Link className="boton" to='/'>Volver a Home</Link>
    </div>
  )
}

export default EmptyCart