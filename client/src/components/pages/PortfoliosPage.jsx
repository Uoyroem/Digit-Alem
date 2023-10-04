import React, { useEffect } from "react";
import { useRequest } from "../../hooks";
import { getPortfolios } from "../../api";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container";
import "./PortfoliosPage.scss";
import useBreadcrumbs from "use-react-router-breadcrumbs"
import router from "../../router";
import Link from "../ui/Link";

function PortfoliosPage() {
    const {
        sendRequest,
        LoadedPortfolioLinks
    } = useRequest(getPortfolios, PortfolioLinks);
    const breadcrumbs = useBreadcrumbs(router.routes);

    useEffect(() => {
        sendRequest();
    }, []);

    function PortfolioLinks(portfolios) {
        return (
            <div className="portfolios-page__content-aside-portfolio-list">
                {portfolios.map(portfolio => (
                    <NavLink
                        key={portfolio.slug}
                        to={`/portfolios/${portfolio.slug}`}
                        className={({ isActive }) => {
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
                <div className="portfolios-page__breadcrumps">
                    {breadcrumbs.map(({ key, breadcrumb, match }, index) => <>{index !== breadcrumbs.length - 1 ? <><Link to={match} className="portfolios-page__breadcrumps-item" key={key}>{breadcrumb}</Link><span className="portfolios-page__breadcrumps-divider">/</span></> : <span className="portfolios-page__breadcrumps-item last" key={key}>{breadcrumb}</span>}</>)}
                </div>
                <hr />
                <div className="portfolios-page__content">
                    <aside className="portfolios-page__content-aside">
                        <LoadedPortfolioLinks />
                    </aside>
                    <div className="portfolios-page__content-portfolio">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PortfoliosPage;