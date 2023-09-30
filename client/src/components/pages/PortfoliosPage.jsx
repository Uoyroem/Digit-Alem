import React, {useEffect} from "react";
import {useRequest} from "../../hooks";
import {getPortfolios} from "../../api";
import {NavLink, Outlet} from "react-router-dom";
import Container from "../Container";
import "./PortfoliosPage.scss";


function PortfoliosPage() {
    const {
        sendRequest,
        LoadedPortfolioLinks
    } = useRequest(getPortfolios, PortfolioLinks);

    useEffect(() => {
        sendRequest();
    }, []);

    function PortfolioLinks(portfolios) {
        return (
            <div className="portfolios-page__content-aside-portfolio-list">
                {portfolios.map(portfolio => (
                    <NavLink
                        key={portfolio.id}
                        to={`/portfolios/${portfolio.slug}`}
                        className={({isActive}) => {
                            return ("portfolios-page__content-aside-portfolio-list-item " +
                                (isActive ? "portfolios-page__content-aside-portfolio-list-item_active" : ""));
                        }}
                    >
                        {portfolio.title}
                    </NavLink>
                ))}
            </div>
        );
    }

    return (
        <div className="portfolios-page">
            <Container>
                <div className="portfolios-page__breadcrumps"></div>
                <hr/>
                <div className="portfolios-page__content">
                    <aside className="portfolios-page__content-aside">
                        <LoadedPortfolioLinks/>
                    </aside>
                    <div className="portfolios-page__content-portfolio">
                        <Outlet/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PortfoliosPage;