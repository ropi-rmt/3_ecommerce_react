import { useState, useEffect } from "react"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({saludo})=> {
    const [data, setData]= useState([])
    // const {saludo}= props
    // console.log(props)
const {type}= useParams()
// console.log(type)

    useEffect(()=> {
        getProducts()
        .then((res)=>{
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                //no filtro
                setData(res)
            }
        })
        //atento al cambio de type
    },[type])

//  console.log(data)
    return(
        <div>
            <h1>{saludo}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer