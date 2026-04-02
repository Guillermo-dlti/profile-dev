import './Navbar.css'

import { NavLink } from "react-router";



const Navbar = ({ children }) => {
    return (
        <>
            <div className="container-navbar">

                <div className="nav-title">
                    MEMO'S_PORTFOLIO
                </div>

                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/aboutMe">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contactMe">Contact Me</NavLink>
                </div>
                
                <div className="resume">
                    <button className="resume-btn">Resume</button>
                </div>

            </div>
            {children}
        </>
    )
}

export default Navbar;