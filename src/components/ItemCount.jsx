
import React, { useState } from 'react'
import '../assets/css/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const finalizarCompra = () => {
        onAdd(count)
    }

    return (
        <div className="itemCount">

            <div className="contador">
                <button
                    className="btnRestar" onClick={restar} disabled={count === 0}>-</button>
                    
                <span className="cantidad">{count}</span>
                    
                    <button className="btnSumar" onClick={sumar} disabled={count === stock}>+</button>
                  
            </div>

            <button className="btnComprar" onClick={finalizarCompra} disabled={count === 0 || stock === 0} >Comprar</button>
                
        </div>
    )
}

export default ItemCount



