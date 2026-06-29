import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = (props)=> {
    return(
        <div>
            
            <FaShoppingCart color ='white' fontSize={'1.5rem'}/>
            <Badge bg="danger">{props.cart}</Badge>
        </div>
    )
}
export default CartWidget