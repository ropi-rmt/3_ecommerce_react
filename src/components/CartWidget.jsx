import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cart, cartQty } = useContext(CartContext)

    console.log(cart)

    return (
        <Link to="/cart">
        <div>
            <FaShoppingCart color="white" fontSize="1.5rem" />
             <span className="burbuja">{cartQty()}</span>
        </div>
        </Link>
    )
}

export default CartWidget

