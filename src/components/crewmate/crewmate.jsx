import "./style.css"
import { Link } from "react-router-dom";

const Crewmate = ({ id, name, speed, color }) => {

    return (

        <div className="crewmate">
            <div className="header">
                <div className="name">{name}</div>
                <Link to={"/edit/" + id}>
                    <div className="edit"> edit </div>
                </Link>
            </div>
            <div className="body">
                <Link to={"/detailed-view/" + id}>
                    <div className="speed">{speed}</div>
                    <div className="color">{color}</div>
                </Link>
            </div>
        </div>
    )
}

export default Crewmate;