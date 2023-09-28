import React from "react";
import "./PortfolioSection.scss";
import {SectionWithHeader} from "./Section";


function PortfolioSection({projects}) {
    return (
        <SectionWithHeader title="Наши проекты">
            <div className="projects">
                {projects.map(project => (
                    <div className="project">
                        <div className="project__img-container" style={{backgroundImage: `url(${project.imageUrl})`}}/>
                        <h3 className="project__name">{project.name}</h3>
                    </div>
                ))}
            </div>
        </SectionWithHeader>
    );
}

export default PortfolioSection;