import React from 'react'
import '../assets/css/ItemDetail.css'
import ItemCount from './ItemCount'


const ItemDetail = ({detail})=> {
    return(
        <div className="detalle" >
            <h2> Detalle de: {detail.name} </h2>
           <img src={detail.img} alt={detail.name}/>
           <p className="description">{detail.description}</p>
           <p className="price">${detail.price}</p>
           <p>Stock: {detail.stock} unidades disponibles</p>
          
           <ItemCount stock={detail.stock}/>
        </div>
    )
}
export default ItemDetail