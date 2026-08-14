import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {

    const { cart } = useContext(CartContext)

    console.log(cart)

    return (
        <div>
            <h2>Mi carrito</h2>

            {cart.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.name}</h3>
                    <p>Cantidad: {prod.quantity}</p>
                    <p>Precio: ${prod.price}</p>
                </div>
            ))}
        </div>
    )
}

export default CartView