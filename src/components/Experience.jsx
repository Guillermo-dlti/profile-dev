import "./Experience.css";

export default function Experience() {
    return (
        <section className="experience-section">
            <div className="experience-container">

                <div className="experience-left">
                    <p className="experience-subtitle">PROFESSIONAL PATH</p>
                    <h2 className="experience-title">
                        Expertise<br />
                        forged in<br />
                        production.
                    </h2>
                </div>

                <div className="experience-right">

                    <div className="experience-item">
                        <div className="experience-item-header">
                            <h3>Systems Developer Intern</h3>
                            <span>March 2026 — Present</span>
                        </div>
                        <p className="experience-company">Aumovio SE</p>
                        <p className="experience-description">
                            Directed a team of engineers in rebuilding core microservices architecture,
                            reducing operational costs and improving system uptime.
                        </p>
                    </div>

                    <div className="experience-divider"></div>

                    <div className="experience-item">
                        <div className="experience-item-header">
                            <h3>NivosTech Co-Founder</h3>
                            <span>2026 — Present</span>
                        </div>
                        <p className="experience-company">NIVOSTECH</p>
                        <p className="experience-description">
                            Led development of scalable web applications and internal tools,
                            improving developer productivity and performance.
                        </p>
                    </div>

                    <div className="experience-divider"></div>

                    <div className="experience-item">
                        <div className="experience-item-header">
                            <h3>Software Engineer</h3>
                            <span>2016 — 2018</span>
                        </div>
                        <p className="experience-company">Foundry Systems</p>
                        <p className="experience-description">
                            Built UI components and internal systems used across multiple applications.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}