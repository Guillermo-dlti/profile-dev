import "./Hero.css"

import { Link } from "react-router";


export default function Hero() {
    return (
        <>
            <p className="main-text">Crafting <span className="secondary-text">Digital Infrastructure</span></p>
            <p>
                Full-stack developer specializing in building
                high-performance, visually stunning web experiences
                that live at the intersection of design and data.
            </p>
            <div className="btn-container">
                <Link to="/projects">
                    <button className="btn">View Project</button>
                </Link>
                <Link to="/aboutMe">
                    <button className="btn">About Me</button>
                </Link>
            </div>
        </>
    )
}

