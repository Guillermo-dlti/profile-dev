import "./Hero.css"


export default function Hero(){
    return (
        <>
            <p className="main-text">Architecting <span className="secondary-text">Digital Artifacts</span></p>
            <p>
                Full-stack developer specializing in building 
                high-performance, visually stunning web experiences 
                that live at the intersection of design and data.
            </p>
            <div className="btn-container">
                <button className="btn">View Project</button>
                <button className="btn">About Me</button>
            </div>
        </>
    )
}

