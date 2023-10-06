import { NavLink } from "react-router-dom";
import "./Link.scss";


function Link({ children, className = "", ...props }) {
    return (
        <NavLink {...props} className={({ isActive }) => (isActive ? "link link_active" : "link") + className}>
            {children}
        </NavLink>
    );
}


export default Link;