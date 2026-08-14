import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../assets/css/CartView.css"
import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'

const CartView = () => {

    const { cart, total, removeItem, clear } = useContext(CartContext)

    console.log(cart)

    return (
        <div className="cartView">

            <h2>Mi carrito</h2>

            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <div className="productosCarrito">

                        {cart.map((prod) => (
                            <div className="cartItem" key={prod.id}>

                                <div className="cartInfo">
                                    <h3>{prod.name}</h3>
                                    <p>Cantidad: {prod.quantity}</p>
                                    <p>Precio: ${prod.price}</p>
                                </div>

                                <button onClick={() => removeItem(prod.id)}>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}

                    </div>

                    <div className="cartTotal">
                        <button onClick={clear} className="boton">Vaciar Carrito</button>

                        <Link to="/checkout" className="boton"> Finalizar Compra </Link>

                        <h3>Total: ${total()}</h3>
                    </div>
                </>
            )}

        </div>
    )
}


export default CartView