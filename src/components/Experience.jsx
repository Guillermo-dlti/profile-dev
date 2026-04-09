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
                            As a Systems Developer Intern, I contribute to the development and maintenance 
                            of internal business applications. I implement software updates, troubleshoot issues, 
                            and assist in building new functionalities. I work with databases for data management 
                            and queries, and support server-side processes to ensure system reliability and performance. 
                        </p>
                    </div>

                    <div className="experience-divider"></div>

                    <div className="experience-item">
                        <div className="experience-item-header">
                            <h3>Co-Founder & Developer</h3>
                            <span>2026 — Present</span>
                        </div>
                        <p className="experience-company">NivosTech</p>
                        <p className="experience-description">
                            Co-founded a small web development studio focused on building modern, 
                            user-friendly websites for local businesses. <br /><br />

                            Collaborated with a team of three to design and develop responsive web solutions
                            and deliver digital experiences that improve 
                            online visibility.
                        </p>
                    </div>

                    {/* <div className="experience-divider"></div> */}

                    {/* <div className="experience-item">
                        <div className="experience-item-header">
                            <h3>Software Engineer</h3>
                            <span>2016 — 2018</span>
                        </div>
                        <p className="experience-company">Foundry Systems</p>
                        <p className="experience-description">
                            Built UI components and internal systems used across multiple applications.
                        </p>
                    </div> */}

                </div>
            </div>
        </section>
    );
}