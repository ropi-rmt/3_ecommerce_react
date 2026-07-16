import React from 'react'

const ItemDetail = ({detail})=> {
    return(
        <div>
            <h2> Detalle de: {detail.name} </h2>
           <img src={detail.img} alt={detail.name}/>
           <p>{detail.description}</p>
           <p>{detail.price}</p>
           <p>Stock: {detail.stock} unidades disponibles</p>
           //me falta el contador!!
        </div>
    )
}
export default ItemDetail