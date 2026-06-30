import { useState, useEffect } from "react"
import { getProducts } from "../mock/data.js"
import Item from "./Item.jsx"
import ItemList from "./ItemList"
import "../assets/css/ItemList.css"


const ItemListContainer = ({saludo})=> {
    const [data, setData]= useState([])
    // const {saludo}= props
    // console.log(props)

    useEffect(()=> {
        getProducts()
        .then((res)=>setData(res))
    },[])
 console.log(data)
    return(
        <div className="itemCard">
            <h1 className="saludo">Bienvenidos a la Tienda Online de Refugio Lunar</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer