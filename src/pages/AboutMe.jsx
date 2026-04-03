import Navbar from "../components/Navbar";
import "./AboutMe.css"
import portraitImg from "../assets/images/about-portrait.jpg";



export default function AboutMe() {
    return (
        <div className="aboutMe-page">
            <Navbar>
                <section className="aboutMe-section">
                    <div className="aboutMe-top">

                        <div className="top-left">
                            <p className="top-label">THE ARCHITECT</p>

                            <h1 className="about-title">
                                Building the skeletal <br />
                                <span className="about-title-accent">frameworks of</span> <br />
                                <span className="about-title-accent">tomorrow.</span>
                            </h1>

                            <p className="about-description">
                                I am a software engineer student focused on high-performace
                                digital infrastructure. My approach treats code as structural
                                engineering-where every line serves as weight-bearing
                                pillar for scalable ecosystems.
                            </p>
                        </div>

                        <div className="top-right">
                            <div className="portrait-card">
                                <img
                                    src={portraitImg}
                                    alt="Portrait illustration"
                                    className="portrait-image"
                                />
                            </div>
                        </div>
                        
                    </div>


                </section>
            </Navbar>
        </div>
    )
}