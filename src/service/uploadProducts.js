import productos from "../mock/data"
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"

const uploadProducts = async () => {

    const productsCollection = collection(db, "products")

    for (const producto of productos) {

        const { id, ...productoSinId } = producto

        const docRef = await addDoc(productsCollection, productoSinId)

        console.log("Producto cargado con ID:", docRef.id)
    }
}

export default uploadProducts