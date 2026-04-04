import Navbar from "../components/Navbar";
import InterestedCard from "../components/InterestedCard";
import portraitImg from "../assets/images/about-portrait.jpg";
import { FiBox, FiLayers, FiGrid, FiShare2 } from "react-icons/fi";
import "./AboutMe.css"



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


                <section className="philosophy-section">

                    <div className="philosophy-container">

                        <div className="aboutMe-philosophy">
                            <div className="philosophy-left">
                                <p className="philosophy-label">PHILOSOPHY</p>

                                <h2 className="philosophy-title">
                                    Structural Integrity <br />
                                    in Every Byte.
                                </h2>

                                <p className="philosophy-description">
                                    Digital products often focus on the surface level—the aesthetics.
                                    I believe the true beauty of software lies in its latent architecture.
                                    To build for the future is to build systems that are resilient,
                                    modular, and invisible.
                                </p>
                                <div className="philosophy-points">
                                    <div className="philosophy-point">
                                        <div className="point-icon">↑</div>
                                        <div className="point-text">
                                            <h3>Modular Composability</h3>
                                            <p>
                                                Creating atomic units of code that can be reconfigured
                                                without friction.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="philosophy-point">
                                        <div className="point-icon">◔</div>
                                        <div className="point-text">
                                            <h3>High-Velocity Latency</h3>
                                            <p>
                                                Optimization isn&apos;t an afterthought; it is the foundation
                                                of the user experience.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="philosophy-right">
                                <div className="philosophy-grid">
                                    <div className="grid-left">
                                        <div className="grid-card"><FiBox /></div>
                                        <div className="grid-card"><FiGrid /></div>
                                    </div>

                                    <div className="grid-right">
                                        <div className="grid-card"><FiLayers /></div>
                                        <div className="grid-card"><FiShare2 /></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <section className="aboutMe-interested">
                    <InterestedCard />
                </section>
            </Navbar>
        </div>
    )
}