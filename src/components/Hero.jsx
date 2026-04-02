import "./Hero.css"
import TechCarousel from "./TechCarousel";
import { Link } from "react-router";


export default function Hero() {
    return (
        <div className="hero-section">

            <div className="hero-top">

                <div className="hero-left">

                    <h1 className="main-text">
                        Crafting
                        <span className="secondary-text"> Digital </span><br />
                        Infrastructure
                    </h1>

                    <p className="hero-description">
                        Full-stack engineer specializing in high-velocity systems
                        and architectural precision. Building the future of the web,
                        one layer at a time.
                    </p>

                    <div className="btn-container">
                        <Link to="/projects">
                            <button className="btn btn-primary">View Workspace →</button>
                        </Link>
                        <Link to="/contactMe">
                            <button className="btn btn-secondary">Get in Touch</button>
                        </Link>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-card">
                        <div className="hero-glow"></div>
                        <div className="hero-status-card">
                            <div className="status-icon">{`</>`}</div>
                            <div>
                                <p className="status-title">Guillermo De La Torre</p>
                                <p className="status-subtitle">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hero-bottom">
                <TechCarousel />
            </div>

        </div>
    )
}

