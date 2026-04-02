import "./TechCarousel.css"



export default function TechCard({ icon: Icon, title }) {
    return (
        <div className="tech-card">
            <div className="tech-icon">
                <Icon />
            </div>
            <p className="tech-title">{title}</p>
        </div>
    );
}