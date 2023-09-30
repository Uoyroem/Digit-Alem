import React, {useEffect} from "react";
import "./PortfolioSection.scss";
import {SectionWithHeader} from "./Section";
import {Link} from "react-router-dom";
import {getPortfolios} from "../../api";
import {useRequest} from "../../hooks";

function PortfolioSection() {
    function onLoaded(portfolios) {
        return portfolios.map(portfolio => (
            <Link to={`portfolios/${portfolio.slug}`} key={portfolio.id} className="portfolio">
                <div className="portfolio__img-container" style={{backgroundImage: `url(${portfolio.imageUrl})`}}/>
                <h3 className="portfolio__title">{portfolio.title}</h3>
            </Link>
        ));
    }

    const {sendRequest, OnResponse} = useRequest(getPortfolios, onLoaded);

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <SectionWithHeader title="Наш портфолио">
            <div className="portfolios">
                <OnResponse/>
            </div>
        </SectionWithHeader>
    );
}

export default PortfolioSection;