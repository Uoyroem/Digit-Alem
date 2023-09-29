import React from "react";
import "./PortfolioSection.scss";
import { SectionWithHeader } from "./Section";
import { Link } from "react-router-dom";


function PortfolioSection({ portfolios }) {
    return (
        <SectionWithHeader title="Наши проекты">
            <div className="portfolios">
                {portfolios.map(portfolio => (
                    <Link to={`portfolios/${portfolio.slug}`} key={portfolio.id} className="portfolio">
                        <div className="portfolio__img-container" style={{ backgroundImage: `url(${portfolio.imageUrl})` }} />
                        <h3 className="portfolio__title">{portfolio.title}</h3>
                    </Link>
                ))}
            </div>
        </SectionWithHeader>
    );
}

export default PortfolioSection;