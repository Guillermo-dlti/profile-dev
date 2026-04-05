// import { Link } from "react-router";
import Hero from "../components/Hero"
import Experience from "../components/Experience";
import InterestedForm from "../components/InterestedForm";
import "./Home.css";



export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Experience />
            <InterestedForm />
        </div>
    );
}