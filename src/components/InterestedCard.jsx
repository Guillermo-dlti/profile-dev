import "./InterestedCard.css";
import { Link } from "react-router";




export default function InterestedCard() {
    return (
        <div className="interested-card">
            <h2 className="interested-title">
                Interested in a project <br />together?
            </h2>

            <p className="interested-description">
                Currently accepting select architectural commisions for 2026. Let's
                discuss your infrastructure.
            </p>

            <div className="interested-buttons">
                <Link to="/contactMe" className="interested-btn interested-btn-primary">Initiate Contact</Link>
                <Link to="/projects" className="interested-btn interested-btn-secondary">View Projects</Link>
            </div>
        </div>
    );
}