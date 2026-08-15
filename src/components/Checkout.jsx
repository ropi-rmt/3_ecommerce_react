import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

import "../assets/css/Checkout.css"

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { cart, total, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const terminarCompra = (e) => {
        e.preventDefault()

        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail) {
            setError('Complete los campos')
        } else if (buyer.mail !== secondMail) {
            setError('Los correos no coinciden')
        } else {
            setError(null)
            setLoading(true)

            const order = {
                comprador: buyer,
                carrito: cart,
                total: total(),
                fecha: serverTimestamp()
            }

            const orderColl = collection(db, "orders")

            addDoc(orderColl, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => {
                    console.log(error)
                    setError('Hubo un error al procesar la compra')
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {orderId ? (
                <div className="exito">
                    <h1>¡Compra exitosa!</h1>
                <img className="gatitoExito" src="https://static.vecteezy.com/system/resources/previews/019/033/724/non_2x/cat-in-paper-bag-cute-orange-cat-peekaboo-in-shopping-bag-waving-hand-paws-kawaii-vector.jpg" alt="gatito compra exitosa" />    
                    <h2>Gracias por tu compra!</h2>
                    <p>Tu número de orden es:</p>
                    <h2 className="exitoId">{orderId}</h2>

                    <Link className="boton" to="/">
                        Volver al inicio
                    </Link>
                </div>
            ) : (
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

                        <button
                            className="boton"
                            type="submit"
                            disabled={loading || orderId}
                        >
                            {loading ? 'Procesando compra...' : 'Finalizar Compra'}
                        </button>

                    </form>

                </div>
            )}
        </>
    )
}

export default Checkout