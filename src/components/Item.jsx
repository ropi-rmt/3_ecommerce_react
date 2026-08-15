import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/ItemList.css"

const Item = ({prod}) => {
  return (
    <div className="card">
   <img src={prod.img} className="cardImg" alt={prod.name}/>
  <div className="card-body">
    <h3 className="">{prod.name}</h3>
    <p className="card-text">${prod.price}</p>
    <Link to={`/Item/${prod.id}`} className="boton">Ver más</Link>
  </div>
</div>
  )
}

export default Item

//comillas invertidas: alt + 96