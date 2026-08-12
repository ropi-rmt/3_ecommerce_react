
import React, { useState } from 'react'
import '../assets/css/ItemCount.css'

const ItemCount = ({ stock }) => {

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
        
    }

    return (
        <div className="itemCount">

            <div className="contador">
                <button
                    className="btnRestar"
                    onClick={restar}
                    disabled={count === 0}
                >
                    -
                </button>

                <span className="cantidad">
                    {count}
                </span>

                <button
                    className="btnSumar"
                    onClick={sumar}
                    disabled={count === stock}
                >
                    +
                </button>
            </div>

            <button
                className="btnComprar"
                onClick={finalizarCompra}
                disabled={count === 0 || stock === 0}
            >
                Comprar
            </button>

        </div>
    )
}

export default ItemCount



/*import React,{useState, useEffect} from 'react'

const ItemCount = ({stock}) => {

const [count, setCount]=useState(1)


 console.log('ITEMcOUNT')
const sumar = ()=> {
    if(count < stock){

        setCount(count + 1)
    }
}
const restar = ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}

//ejemplo
const finalizarCompra = ()=> {
    
}




  return (
    <div>
        <button className='boton' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn'>{count}</span>
        <button className='boton' onClick={sumar} disabled={count === stock}>+</button>
        <button className='boton' onClick={finalizarCompra} disabled={count === 0 || stock === 0}>Comprar</button>
    </div>
  )
}

export default ItemCount*/