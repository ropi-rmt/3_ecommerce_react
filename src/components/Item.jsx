import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div className="card">
   <img src={prod.img} className="cardImg" alt={prod.name}/>
  <div className="card-body">
    <h5 className="">{prod.name}</h5>
    <p className="card-text">${prod.price}</p>
    <Link to={`/Item/${prod.id}`} className="boton">Ver más</Link>
  </div>
</div>
  )
}

export default Item

//comillas invertidas: alt + 96