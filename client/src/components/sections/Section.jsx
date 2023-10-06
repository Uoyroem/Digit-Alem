import React from "react";
import "./Section.scss";
import Container from "../Container";

export function Section({ children, className = "", ...props }) {
    return (
        <section {...props} className={`section ${className}`}>
            {children}
        </section>
    );
}

export function SectionWithHeader({ title, headerClassName = "", titleClassName = "", children, ...props }) {
    return (
        <Section {...props}>
            <Container>
                <header className={`section__header ${headerClassName}`}>
                    <h1 className={titleClassName}>{title}</h1>
                </header>
                {children}
            </Container>
        </Section>
    );
}