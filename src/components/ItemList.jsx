import React from 'react'
import Item from './Item.jsx'
import "../assets/css/ItemList.css"

const ItemList = ({data}) => {
  return (
    <div className='galeria'>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList