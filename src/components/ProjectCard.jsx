import "./ProjectsSection.css";

export default function ProjectCard({
    title,
    description,
    tags = [],
    image,
    variant = "medium",
    showAction = false,
    actionText = "View Repository",
    repoUrl = "#",
    icon = null,
}) {
    if (variant === "split") {
        return (
            <article className={`project-card ${variant}`}>
                <div className="project-split-content">
                    {icon && <div className="project-mini-icon">{icon}</div>}

                    <div className="project-title-row">
                        <h3 className="project-card-title">{title}</h3>
                    </div>

                    <p className="project-card-description">{description}</p>

                    {tags.length > 0 && (
                        <div className="project-tags">
                            {tags.map((tag) => (
                                <span key={tag} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {showAction && (
                        <button className="project-action-btn">
                            {actionText} <span>→</span>
                        </button>
                    )}
                </div>

                {image && (
                    <div className="project-split-image-wrapper">
                        <img src={image} alt={title} className="project-image" />
                    </div>
                )}
            </article>
        );
    }

    return (
        <article className={`project-card ${variant}`}>
            {image && (
                <div className={`project-image-wrapper ${variant}`}>
                    <img src={image} alt={title} className="project-image" />
                </div>
            )}

            <div className="project-card-content">
                {icon && <div className="project-mini-icon">{icon}</div>}

                <div className="project-title-row">
                    <h3 className="project-card-title">{title}</h3>
                    {variant === "large" && (
                        <div className="project-title-actions">
                            <span>‹›</span>
                            <span>↗</span>
                        </div>
                    )}
                </div>

                <p className="project-card-description">{description}</p>

                {tags.length > 0 && (
                    <div className="project-tags">
                        {tags.map((tag) => (
                            <span key={tag} className="project-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {showAction && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                        {actionText} <span>→</span>
                    </a>
                )}
            </div>
        </article>
    );
}