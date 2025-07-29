import { NavLink } from "react-router-dom"
import "./style.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="nav-link" to={'/'}>Home</NavLink>
            <NavLink className="nav-link" to={'/create'}>Create Crewmate</NavLink>
            <NavLink className="nav-link" to={'/gallery'}>View Crewmates</NavLink>
        </div>
    )
}

export default Navbar;