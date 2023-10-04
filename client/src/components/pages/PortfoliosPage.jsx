import React, { useEffect } from "react";
import { useRequest } from "../../hooks";
import { getPortfolios } from "../../api";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container";
import "./PortfoliosPage.scss";
import useBreadcrumbs from "use-react-router-breadcrumbs"
import router from "../../router";
import Link from "../ui/Link";

function PortfolioLinks(portfolios) {
    return (
        <ul className="portfolio-links">
            {portfolios.map(portfolio => (
                <li>
                    <NavLink
                        key={portfolio.slug}
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
                            <li>
                                <NavLink className={({ isActive }) => {
                                    return ("project-links__item " +
                                        (isActive ? "project-links__item_active" : ""));
                                }} key={project.slug} to={`/portfolios/${project.portfolioSlug}/projects/${project.slug}`}>{project.title}</NavLink>
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
        LoadedPortfolioLinks
    } = useRequest(getPortfolios, PortfolioLinks);
    const breadcrumbs = useBreadcrumbs(router.routes);

    useEffect(() => {
        sendRequest();
    }, []);



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