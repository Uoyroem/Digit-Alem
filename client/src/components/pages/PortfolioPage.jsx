import { useParams } from "react-router-dom";
import { getPortfolio, getPortfolios } from "../../api";
import { useRequest } from "../../hooks";
import "./PortfolioPage.scss";
import { useEffect } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

function PortfolioLinkItem({ portfolio }) {
    return (
        <li className="portfolio-link-item">
            <Link className="portfolio-link-item__link" to={`/portfolios/${portfolio.slug}`}>{portfolio.title}</Link>
        </li>
    );
}

function PortfolioItem({ portfolio }) {
    return (
        <div><div className="portfolio-page__content-portfolio-image-and-title" style={{ backgroundImage: `url(${portfolio.imageUrl})` }}>
            <h1>{portfolio.title}</h1>
        </div><iframe src={portfolio.htmlDescriptionUrl} frameborder="0"></iframe></div>
    );
}

function PortfolioPage() {
    const { portfolioSlug } = useParams();
    const { sendRequest: sendGetPortfolio, data: portfolio, error: portfolioError, loaded: portfolioLoaded } = useRequest(getPortfolio);
    const { sendRequest: sendGetPortfolios, data: portfolios, error: portfoliosError, loaded: portfoliosLoaded } = useRequest(getPortfolios);

    useEffect(() => {
        sendGetPortfolio(portfolioSlug);
        sendGetPortfolios();
    }, []);

    return (
        <div className="portfolio-page">
            <Container>
                <div className="portfolio-page__breadcrumbs"></div>
                <hr />
                <div className="portfolio-page__content">
                    <aside className="portfolio-page__content-aside">
                        <h2 className="portfolio-page__content-aside-title">Наш портфолио</h2>
                        {portfoliosError != null ? <div>{portfoliosError}</div> : portfoliosLoaded ? <ul className="portfolio-page__content-aside-portfolio-list"> {portfolios.map(portfolio => <PortfolioLinkItem key={portfolio.id} portfolio={portfolio} />)} </ul> : <div>Загрузка...</div>}
                    </aside>
                    <div className="portfolio-page__content-portfolio">
                        {portfolioError != null ? <div>{portfolioError}</div> : portfolioLoaded ? <PortfolioItem portfolio={portfolio} /> : <div>Загрузка...</div>}

                    </div>
                </div>
            </Container>
        </div>
    );
}


export default PortfolioPage;