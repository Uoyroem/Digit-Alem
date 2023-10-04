import React, { useEffect } from "react";
import "./PortfolioSection.scss";
import { SectionWithHeader } from "./Section";
import { Link } from "react-router-dom";
import { getPortfolios } from "../../api";
import { useRequest } from "../../hooks";

function PortfolioSection() {
    function Portfolios(portfolios) {
        return portfolios.map(portfolio => (
            <Link to={`portfolios/${portfolio.slug}`} key={portfolio.slug} className="portfolio">
                <div className="portfolio__img-container" style={{ backgroundImage: `url(${portfolio.imageUrl})` }} />
                <h3 className="portfolio__title">{portfolio.title}</h3>
            </Link>
        ));
    }

    const { sendRequest, LoadedPortfolios } = useRequest(getPortfolios, Portfolios);

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <SectionWithHeader title="Наш портфолио">
            <div className="portfolios">
                <LoadedPortfolios />
            </div>
        </SectionWithHeader>
    );
}

export default PortfolioSection;