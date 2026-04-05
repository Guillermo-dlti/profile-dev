import { Link } from "react-router";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";



export default function Projects() {
    return (
        <div>
            <Navbar>
                <ProjectsSection />
                {/* <h1>Projects</h1>
                <p>
                    <Link to="/">Go Back</Link>
                </p> */}
            </Navbar>
        </div>
    )
}