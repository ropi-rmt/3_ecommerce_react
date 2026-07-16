import React from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
   
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
    },[])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer