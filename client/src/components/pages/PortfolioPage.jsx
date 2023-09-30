import {NavLink, useParams} from "react-router-dom";
import * as api from "../../api";
import {useRequest} from "../../hooks";
import "./PortfolioPage.scss";
import {useEffect} from "react";
import Container from "../Container";


function PortfolioPage() {
    const {portfolioSlug} = useParams();

    function onPortfolioLoaded(portfolio) {
        return (
            <div>
                <div className="portfolio-page__content-portfolio-image-and-title"
                     style={{backgroundImage: `url(${portfolio.imageUrl})`}}>
                    <h1>{portfolio.title}</h1>
                </div>
                <iframe src={portfolio.htmlDescriptionUrl} frameBorder="0"></iframe>
            </div>
        );
    }

    function onPortfoliosLoaded(portfolios) {
        return (
            <div className="portfolio-page__content-aside-portfolio-list">
                {portfolios.map(portfolio => (
                    <NavLink
                        key={portfolio.id}
                        to={`/portfolios/${portfolio.slug}`}
                        className={({isActive}) => {
                            return ("portfolio-page__content-aside-portfolio-list-item " +
                                (isActive ? "portfolio-page__content-aside-portfolio-list-item_active" : ""));
                        }}
                    >
                        {portfolio.title}
                    </NavLink>
                ))}
            </div>);
    }

    const {sendRequest: getPortfolio, OnResponse: Portfolio} = useRequest(api.getPortfolio, onPortfolioLoaded);
    const {
        sendRequest: getPortfolios,
        OnResponse: PortfolioLinks
    } = useRequest(api.getPortfolios, onPortfoliosLoaded);

    useEffect(() => {
        getPortfolio(portfolioSlug);
    }, [portfolioSlug]);
    useEffect(() => {
        getPortfolios();
    }, []);

    return (
        <div className="portfolio-page">
            <Container>
                <div className="portfolio-page__breadcrumbs"></div>
                <hr/>
                <div className="portfolio-page__content">
                    <aside className="portfolio-page__content-aside">
                        <h2 className="portfolio-page__content-aside-title">Наш портфолио</h2>
                        <PortfolioLinks/>
                    </aside>
                    <div className="portfolio-page__content-portfolio">
                        <Portfolio/>
                    </div>
                </div>
            </Container>
        </div>
    );
}


export default PortfolioPage;