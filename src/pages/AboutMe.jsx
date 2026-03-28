import { Link } from "react-router";



export default function Home(){
    return (
        <div>
            <h1>About Me</h1>
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    )
}