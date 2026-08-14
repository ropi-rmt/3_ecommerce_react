import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //ya esta el producto en el carrito?
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //agregar prod, definiendo si ya esta en el carrito o no con el map
    const addItem = (item, qty) => {

        if (isInCart(item.id)) {

            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return {
                            ...prod,
                            quantity: prod.quantity + qty
                        }
                    } else {
                        return prod
                    }
                })
            )

        } else {

            setCart([
                ...cart,
                {
                    ...item,
                    quantity: qty
                }
            ])

        }
    }

    // vaciar carrito
    const clear = () => {
        setCart([])
    }

    // eliminar un producto por completo segun su id
    const removeItem = (id) => {
        setCart(
            cart.filter((prod) => prod.id !== id)
        )
    }

    //total en el carrito
    const cartQty = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)

    }

    const getItemQty = (id) => {
        const prodInCart = cart.find((prod) => prod.id === id)
        if (prodInCart) {
            return prodInCart.quantity
        } else {
            return 0
        }
    }



    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, cartQty, total, getItemQty }}>


            {children}
        </CartContext.Provider>
    )

}