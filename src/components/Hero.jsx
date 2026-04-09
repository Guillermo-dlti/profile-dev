import "./Hero.css"
import TechCarousel from "./TechCarousel";
import { Link } from "react-router";


export default function Hero() {
    return (
        <div className="hero-section">

            <div className="hero-top">

                <div className="hero-left">

                    <p className="hero-intro">Hey, I'm</p>

                    <h1 className="main-text">
                        Guillermo
                        <span className="secondary-text"> De La </span><br />
                        Torre Isunza
                    </h1>

                    <p className="hero-description">
                        I’m a Software Engineer student with a constant desire to grow. 
                        I enjoy building backend systems and working with databases, 
                        while continuously learning and pushing myself to improve 
                        as a developer.
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

