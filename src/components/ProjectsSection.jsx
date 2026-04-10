import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

import projectLarge from "../assets/images/project-large.jpg";
import projectServers from "../assets/images/project-servers.jpg";
import projectCode from "../assets/images/project-code.jpg";
import smartmirror1 from "../assets/images/smartmirror1.webp";
import smartcities1 from "../assets/images/smartcities1.webp";
import pokemon1 from "../assets/images/pokemon1.webp";

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">
                        My <span className="projects-accent">Projects</span>
                    </h2>

                    <p className="projects-description">
                        A collection of projects where I’ve applied backend
                        development, worked with databases, and explored new
                        technologies while improving my skills.
                    </p>
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="large"
                        title="Banorte Ruta Consciente"
                        description="A Smart Cities fintech solution developed for Hack MTY 2025 that bridges financial services with urban mobility. The platform utilizes predictive data models and TomTom’s Map Toolkit to incentivize sustainable commuting habits by rewarding users for responsible travel decisions. Built with a Python-Flask backend and a React frontend, it explores how banking data can empower greener, more connected urban environments."
                        tags={["PYTHON", "FLASK", "SCIKIT-LEARN", "TOMTOM API", "REACT", "MONGODB"]}
                        image={smartcities1}
                        showAction={true}
                        repoUrl="https://devpost.com/software/banorte-ruta-consciente"
                    />

                    <ProjectCard
                        variant="small tall"
                        title="Smart Mirror IoT"
                        description="Award-winning integrated system featuring real-time AI facial recognition via OpenCV and a robust IoT sensor network managed by Raspberry Pi and NodeMCU. Developed for Expo Ingenierías 2025, it leverages a hybrid SQL/NoSQL architecture to handle user data and environmental telemetry. Winner of 1st Place in Physical Prototype."
                        tags={["NODE.JS", "REACT", "PYTHON", "IOT", "MONGODB"]}
                        image={smartmirror1}
                        showAction={true}
                        actionText="View Repository"
                        repoUrl="https://github.com/Guillermo-dlti/Smart-Mirror"
                    />
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="small"
                        title="Digital Calculator"
                        description="A web-based calculator with input validation for arithmetic and power operations. Includes a persistent log to track and manage previous calculation history."
                        tags={["HTML5", "CSS3", "JAVASCRIPT", "DOM"]}
                        icon="⌘"
                        showAction={true}
                        repoUrl="https://github.com/Guillermo-dlti/calculadora"
                    />

                    <ProjectCard
                        variant="split"
                        title="Nintendo Switch"
                        description="A Nintendo Switch interface simulation built with React and Tailwind CSS. It features a dynamic gaming dashboard that integrates the PokeAPI to manage real-time data fetching, sprite rendering, and interactive character modules."
                        tags={["REACT", "TAILWIND", "REST API", "UX/UI"]}
                        image={pokemon1}
                        showAction={true}
                        actionText="View Repository"
                        repoUrl="https://github.com/Guillermo-dlti/project-console-retro-game"
                    />
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="wideOutlined"
                        title="YelpCamp Full-Stack"
                        description="A full-stack CRUD application for discovering and reviewing campgrounds. Features RESTful architecture, secure user authentication, and persistent data management."
                        tags={["NODE.JS", "EXPRESS", "MONGODB", "BOOTSTRAP"]}
                        showAction={true}
                        repoUrl="https://github.com/Guillermo-dlti/YelpCamp"
                    />

                    <ProjectCard
                        variant="wideOutlined"
                        title="Airport OOP Simulator"
                        description="A C++ simulation of airport operations utilizing core OOP principles like inheritance, polymorphism, and encapsulation. Designed to manage flight scheduling and passenger logistics through efficient data structures."
                        tags={["C++", "OOP", "DATA STRUCTURES"]}
                        // showAction={true}
                        // repoUrl="https://github.com/Guillermo-dlti/Airport-OOP" 
                    />
                </div>
            </div>
        </section>
    );
}