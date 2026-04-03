import './Navbar.css'

import { NavLink } from "react-router";



const Navbar = ({ children }) => {
    return (
        <div className='layout'>
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

            <main className="page-content">
                {children}
            </main>

            <footer className="footer">
                <div className="footer-left">
                    MEMO'S_PORTFOLIO
                </div>

                <div className="footer-center">
                    © 2026 Memo's Portfolio.
                </div>

                <div className="footer-right">
                    <a href="https://github.com/Guillermo-dlti" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/guillermo-de-la-torre-isunza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:guillermo.delatorreisunza@gmail.com">Email</a>
                </div>
            </footer>
        </div>
    )
}

export default Navbar;