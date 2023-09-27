import React from "react";
import Section from "../Section";
import styles from "./PortfolioSection.module.scss";


function PortfolioSection({projects}) {
    return (
        <Section title="Наши проекты">
            <div className={styles.projects}>
                {projects.map(project => (
                    <div className={styles.project}>
                        <div style={{backgroundImage: `url(${project.imageUrl})`}}
                             className={styles.project__imgContainer}>
                        </div>
                        <h3 className={styles.project__name}>{project.name}</h3>
                    </div>
                ))}
            </div>

        </Section>
    );
}

export default PortfolioSection;