import React from 'react'
import '../assets/css/ItemDetail.css'
import ItemCount from './ItemCount'

import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ detail }) => {

    const { addItem, getItemQty } = useContext(CartContext)

    const availableStock = detail.stock - getItemQty(detail.id)

    const [purchased, setPurchased] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setPurchased(true)
    }



    return (
        <div className="detalle" >
            
            <h2> {detail.name} </h2>
            <img className="imgDetail" src={detail.img} alt={detail.name} />
            <p className="description">{detail.description}</p>
            <p className="price">${detail.price}</p>
            <p>Stock: {availableStock} unidades disponibles</p>

            {purchased ? (
                <div>
                    <Link className="boton" to="/cart">IR AL CARRITO</Link>
                    <Link className="boton" to="/">CONTINUAR COMPRANDO</Link>
                </div>
            ) : (
                <ItemCount stock={availableStock} onAdd={onAdd} />
            )}

        </div>
    )
}


export default ItemDetail