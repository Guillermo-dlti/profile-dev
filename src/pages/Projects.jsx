import { Link } from "react-router";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";



export default function Projects() {
    return (
        <div>
            <Navbar>
                <ProjectsSection />
            </Navbar>
        </div>
    )
}