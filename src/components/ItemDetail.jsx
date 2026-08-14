import React from 'react'
import '../assets/css/ItemDetail.css'
import ItemCount from './ItemCount'

import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemDetail = ({ detail }) => {

    const { addItem, getItemQty } = useContext(CartContext)

    const availableStock = detail.stock - getItemQty(detail.id)

    const onAdd = (cantidad) => {addItem(detail, cantidad)}

    

    return (
        <div className="detalle" >
            <h2> {detail.name} </h2>
            <img src={detail.img} alt={detail.name} />
            <p className="description">{detail.description}</p>
            <p className="price">${detail.price}</p>
            <p>Stock: {availableStock} unidades disponibles</p>

            <ItemCount stock={availableStock} onAdd={onAdd} />
        </div>
    )
}
export default ItemDetail