import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import "../assets/css/ItemList.css"
import { useParams } from "react-router-dom"
import LoadingComponent from "./LoadingComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { type } = useParams()

    useEffect(() => {
        setLoading(true)

        const prodCollection = type ? query(collection(db, "products"), where("category", "==", type)) : collection(db, "products")
        
        getDocs(prodCollection)
        
            .then((res) => {

                //PRUEBAS DE CONEXION CON FIREBASE
                console.log("Respuesta Firebase:", res)
                console.log("Cantidad de productos:", res.docs.length)

                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                console.log("Lista de productos:", list)

                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [type])


    if (loading) {
        return <LoadingComponent text="Cargando productos..." />
    }

    return (
        <div className="itemCard">

            <h1 className="saludo">
                Bienvenidos a la Tienda Online de Refugio Lunar
            </h1>

            {
                type && data.length === 0 ? (
                    <div className="mensajeCategoria">
                        <h2>🚧 Categoría en construcción</h2>
                        <p>
                            Todavía no tenemos productos disponibles en esta categoría.
                        </p>
                    </div>
                ) : (
                    <ItemList data={data} />
                )
            }

        </div>
    )
}

export default ItemListContainer

