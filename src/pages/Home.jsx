// import { Link } from "react-router";
import Hero from "../components/Hero"
import InterestedForm from "../components/InterestedForm";
import "./Home.css";



export default function Home() {
    return (
        <div className="home-page">
            <Hero />

            <InterestedForm />
        </div>
    );
}