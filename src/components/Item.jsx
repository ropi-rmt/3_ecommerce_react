import React from 'react'


const Item = ({prod}) => {
  return (
    <div className="card">
   <img src={prod.img} className="cardImg" alt={prod.name}/>
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">${prod.price}</p>
    <a href="#" className="boton">Ver más</a>
  </div>
</div>
  )
}

export default Item