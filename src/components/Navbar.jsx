import './Navbar.css'
import { Link } from "react-router";

// export default function Navbar(){
//     return (
//         <>
//             <h1>Navbar</h1>
//         </>
//     )
// }

const Navbar = ({ children }) => {
    return (
        <>
            <div className="container-navbar">
                <div className="links">
                    <p>
                        <Link to="/home">Home</Link>
                    </p>
                    <p>
                        <Link to="/aboutMe">About Me</Link>
                    </p>
                    <p>
                        <Link to="/projects">Projects</Link>
                    </p>
                    <p>
                        <Link to="/contactMe">Contact Me</Link>
                    </p>
                </div>
            </div>
            {children}
        </>
    )
}

export default Navbar;