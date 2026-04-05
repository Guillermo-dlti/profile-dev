import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

import projectLarge from "../assets/images/project-large.jpg";
import projectServers from "../assets/images/project-servers.jpg";
import projectCode from "../assets/images/project-code.jpg";

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">
                        Digital <span className="projects-accent">Ecosystem</span>
                    </h2>

                    <p className="projects-description">
                        A curated catalog of architectural software solutions, ranging from
                        low-level systems programming to distributed cloud infrastructures.
                    </p>
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="large"
                        title="Aether Engine"
                        description="A high-performance distributed ledger built with Rust and Substrate for real-time asset tracking."
                        tags={["RUST", "WASM", "GRPC", "SUBSTRATE"]}
                        image={projectLarge}
                    />

                    <ProjectCard
                        variant="small tall"
                        title="Cloud-Native Mesh"
                        description="Service mesh controller for Kubernetes clusters with automated mTLS and observability."
                        image={projectServers}
                        showAction={true}
                        actionText="View Repository"
                    />
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="small"
                        title="Nexus CLI"
                        description="Development workflow automation tool providing seamless environment synchronization across teams."
                        tags={["TYPESCRIPT", "NODE.JS"]}
                        icon="⌘"
                    />

                    <ProjectCard
                        variant="medium"
                        title="Vanguard OS"
                        description="A microkernel operating system written in Zig, exploring memory safety without a garbage collector."
                        tags={["ZIG", "X86_64", "KERNEL"]}
                        showAction={true}
                        actionText="Documentation"
                    />

                    <ProjectCard
                        variant="imageOnly"
                        title="Infrastructure Stream"
                        description=""
                        image={projectCode}
                    />
                </div>

                <div className="projects-row">
                    <ProjectCard
                        variant="wideOutlined"
                        title="Lumina Protocol"
                        description="Encrypted peer-to-peer messaging protocol with perfect forward secrecy."
                        tags={["C++", "OpenSSL"]}
                    />

                    <ProjectCard
                        variant="wideOutlined"
                        title="Titan Data Vis"
                        description="Real-time GPU-accelerated visualization for large-scale astronomical datasets."
                        tags={["Python", "CUDA"]}
                    />
                </div>
            </div>
        </section>
    );
}