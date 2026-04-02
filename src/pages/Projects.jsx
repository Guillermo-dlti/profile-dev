import { Link } from "react-router";
import Navbar from "../components/Navbar";



export default function Projects() {
    return (
        <div>
            <Navbar>
                <h1>Projects</h1>
                <p>
                    <Link to="/">Go Back</Link>
                </p>
            </Navbar>
        </div>
    )
}