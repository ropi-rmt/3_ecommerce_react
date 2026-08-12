import uploadProducts from "../service/uploadProducts"

const UploadProducts = () => {

    const handleUpload = () => {
        uploadProducts()
    }

    return (
        <button onClick={handleUpload}>
            Cargar productos a Firebase
        </button>
    )
}

export default UploadProducts