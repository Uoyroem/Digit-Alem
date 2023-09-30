import React, { useEffect } from "react";
import "./PortfolioSection.scss";
import { SectionWithHeader } from "./Section";
import { Link } from "react-router-dom";
import { getPortfolios } from "../../api";
import { useRequest } from "../../hooks";

function PortfolioSection() {
    const { sendRequest, loaded, error, data: portfolios } = useRequest(getPortfolios);

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <SectionWithHeader title="Наши проекты">
            <div className="portfolios">
                {error != null ? <div>{error}</div> : loaded ? portfolios.map(portfolio => (
                    <Link to={`portfolios/${portfolio.slug}`} key={portfolio.id} className="portfolio">
                        <div className="portfolio__img-container" style={{ backgroundImage: `url(${portfolio.imageUrl})` }} />
                        <h3 className="portfolio__title">{portfolio.title}</h3>
                    </Link>
                )) : <div>Загрузка...</div>}
            </div>
        </SectionWithHeader>
    );
}

export default PortfolioSection;