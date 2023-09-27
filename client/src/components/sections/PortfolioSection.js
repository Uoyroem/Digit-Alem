import React from "react";
import Section from "../Section";
import "./PortfolioSection.scss";


function PortfolioSection({ projects }) {
    return (
        <Section title="Наши проекты">
            <div className="projects">
                {projects.map(project => (
                    <div className="project">
                        <div className="project__img-container" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                        <h3 className="project__name">{project.name}</h3>
                    </div>
                ))}
            </div>

        </Section>
    );
}

export default PortfolioSection;