import React from 'react'

import ItemCount from './ItemCount'

const ItemDetail = ({detail})=> {
    return(
        <div>
            <h2> Detalle de: {detail.name} </h2>
           <img src={detail.img} alt={detail.name}/>
           <p>{detail.description}</p>
           <p>{detail.price}</p>
           <p>Stock: {detail.stock} unidades disponibles</p>
           //me falta el contador!!
           <ItemCount stock={detail.stock}/>
        </div>
    )
}
export default ItemDetail

//la unica dif con main es que le di className a las etiquetas para mejorar el CSS