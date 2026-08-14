import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../assets/css/CartWidget.css"

const CartWidget = () => {

    const { cart, cartQty } = useContext(CartContext)

    console.log(cart)

    return (
        <Link to="/cart">
        <div className="carritoNavbar">
            <FaShoppingCart color="white" fontSize="1.5rem" />
             <p className="burbuja">{cartQty()}</p>
        </div>
        </Link>
    )
}

export default CartWidget

