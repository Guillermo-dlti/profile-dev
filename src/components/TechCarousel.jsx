import "./TechCarousel.css"
import TechCard from "./TechCard"
import { techStackData } from "./techStackData"


export default function TechCarousel() {
    return (
        <section className="tech-section">
            <div className="tech-container">

                <p className="tech-label">CAPABILITIES</p>
                <h2 className="tech-heading">The Tech Stack</h2>

                <div className="tech-carousel">
                    {techStackData.map((tech) => (
                        <TechCard
                            key={tech.id}
                            icon={tech.icon}
                            title={tech.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}