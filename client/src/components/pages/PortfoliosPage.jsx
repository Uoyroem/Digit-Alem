import React, { useEffect } from "react";
import { useRequest } from "../../hooks";
import { getPortfolios } from "../../api";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container";
import "./PortfoliosPage.scss";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs"
import router from "../../router";
import Link from "../ui/Link";

function PortfolioLinks(portfolios) {
    return (
        <ul className="portfolio-links">
            {portfolios.map(portfolio => (
                <li key={portfolio.slug}>
                    <NavLink

                        to={`/portfolios/${portfolio.slug}`}
                        className={({ isActive }) => {
                            return ("portfolio-links__item " +
                                (isActive ? "portfolio-links__item_active" : ""));
                        }}
                    >
                        <div>{portfolio.title}</div>
                    </NavLink>
                    <ul className="project-links">
                        {portfolio.projects.map(project => (
                            <li key={project.slug}>
                                <NavLink className={({ isActive }) => {
                                    return ("project-links__item " +
                                        (isActive ? "project-links__item_active" : ""));
                                }} to={`/portfolios/${project.portfolioSlug}/projects/${project.slug}`}>{project.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

function PortfoliosPage() {
    const {
        sendRequest,
        loadedComponents
    } = useRequest(getPortfolios, PortfolioLinks);
    const breadcrumbs = useReactRouterBreadcrumbs(router.routes);

    useEffect(() => {
        sendRequest();
    }, []);



    return (
        <div className="portfolios-page">
            <Container>
                <div className="portfolios-page__breadcrumps">
                    {breadcrumbs.map(({ key, breadcrumb, match }, index) => <div key={key}>{index !== breadcrumbs.length - 1 ? <><Link to={match} className="portfolios-page__breadcrumps-item">{breadcrumb}</Link><span className="portfolios-page__breadcrumps-divider">/</span></> : <span className="portfolios-page__breadcrumps-item last">{breadcrumb}</span>}</div>)}
                </div>
                <hr />
                <div className="portfolios-page__content">
                    <aside className="portfolios-page__content-aside">
                        {loadedComponents[PortfolioLinks]()}
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