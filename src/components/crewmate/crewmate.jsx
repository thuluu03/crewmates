import "./style.css"
import { Link } from "react-router-dom";
import details from "../../data/crewDescription";

const Crewmate = ({ id, name, speed, color }) => {
    const images = details.images

    return (
        <div className={"crewmate " + color}>
            <div className="header">
                <div className="name">{name}</div>
                <Link to={"/edit/" + id}>
                    <div className="edit"> edit </div>
                </Link>
            </div>
            <div className="body">
                <Link to={"/detailed-view/" + id}>
                    <div className="image-container"><img className="image" src={images[color]} /></div>
                    <div className="speed">{speed}</div>
                    <div className="color">{color}</div>
                </Link>
            </div>
        </div>
    )
}

export default Crewmate;