import React from "react";
import "./PortfolioSection.scss";
import Container from "../Container";


function PortfolioSection({ projects }) {
    return (
        <section title="Наши проекты">
            <Container>
                <div className="projects">
                    {projects.map(project => (
                        <div className="project">
                            <div className="project__img-container" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                            <h3 className="project__name">{project.name}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default PortfolioSection;