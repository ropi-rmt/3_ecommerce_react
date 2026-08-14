import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const [error, setError] = useState(null)

    const { cart } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const terminarCompra = (e) => {
        e.preventDefault()

        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail) {
                
            setError('Complete todos los campos')
        } else if (buyer.mail !== secondMail) {
            setError('Los correos no coinciden')
        } else {
            setError(null)
            console.log('Formulario válido', buyer)
        }
    }

    if (!cart.length) {
        return <EmptyCart />
    }

    return (
        <div className="checkout">

            <h2>Complete con sus datos</h2>

            {error && <p>{error}</p>}

            <form onSubmit={terminarCompra}>

                <input
                    name="name"
                    type="text"
                    placeholder="Ingresá tu nombre"
                    onChange={buyerData}
                />

                <input
                    name="lastname"
                    type="text"
                    placeholder="Ingresá tu apellido"
                    onChange={buyerData}
                />

                <input
                    name="address"
                    type="text"
                    placeholder="Ingresá tu dirección"
                    onChange={buyerData}
                />

                <input
                    name="mail"
                    type="email"
                    placeholder="Ingresá tu correo"
                    onChange={buyerData}
                />

                <input
                    name="secondmail"
                    type="email"
                    placeholder="Repetí tu correo"
                    onChange={(e) => setSecondMail(e.target.value)}
                />

                <button type="submit">
                    TERMINAR COMPRA
                </button>

            </form>

        </div>
    )
}

export default Checkout