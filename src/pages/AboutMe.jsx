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
                            <p className="top-label">THIS IS ME</p>

                            <h1 className="about-title">
                                Building reliable <br />
                                <span className="about-title-accent">systems and</span> <br />
                                <span className="about-title-accent">growing every day.</span>
                            </h1>

                            <p className="about-description">
                                I’m a Computer Engineer student focused on backend 
                                development and databases. I consider myself a dedicated 
                                person who is always looking to improve. Whether it’s learning 
                                new technologies, refining my problem-solving skills, or building 
                                more efficient systems.
                                <br /><br />
                                I enjoy working on the logic behind applications, understanding 
                                how things work under the hood, and creating solutions that are both 
                                functional and scalable. 
                                <br /><br />
                                Outside of tech, I’m passionate about sports. They’ve shaped my 
                                discipline, consistency, and mindset.

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
                                    Building systems<br />
                                    that actually work.
                                </h2>

                                <p className="philosophy-description">
                                    I believe good software is not just about how it looks, 
                                    but how it performs and scales over time. While many focus 
                                    on the frontend, I’m more interested in what happens behind 
                                    the scenes, the structure, and the data.
                                </p>
                                <div className="philosophy-points">
                                    <div className="philosophy-point">
                                        <div className="point-icon">↑</div>
                                        <div className="point-text">
                                            <h3>Clean & Scalable Logic</h3>
                                            <p>
                                                Writing code that is structured, easy to understand, 
                                                and built to grow without breaking.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="philosophy-point">
                                        <div className="point-icon">◔</div>
                                        <div className="point-text">
                                            <h3>Performance Matters</h3>
                                            <p>
                                                Focusing on efficiency and optimization 
                                                from the start, not as an afterthought.
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