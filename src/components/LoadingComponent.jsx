import { Spinner } from "react-bootstrap"
import "../assets/css/LoadingComponent.css"

const LoadingComponent = ({ text }) => {
    return (
        <div className="loading">
            <Spinner variant="dark" animation="border" />
            <span>{text}</span>
        </div>
    )
}

export default LoadingComponent