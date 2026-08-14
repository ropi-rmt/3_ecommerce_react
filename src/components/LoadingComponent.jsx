import "../assets/css/LoadingComponent.css"
import { DotLoader } from "react-spinners"

const LoadingComponent = ({ text }) => {
    return (
        <div className="loading">
            <DotLoader color="#222" size={35} />
            <span>{text}</span>
        </div>
    )
}

export default LoadingComponent