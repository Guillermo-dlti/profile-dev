import { Link } from "react-router";
import Navbar from "../components/Navbar";



export default function AboutMe() {
    return (
        <div>
            <Navbar>
                <h1>About Me</h1>
                <p>
                    <Link to="/">Go Back</Link>
                </p>
            </Navbar>
        </div>
    )
}