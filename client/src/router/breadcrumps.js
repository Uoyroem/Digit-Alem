import { useEffect } from "react";
import { getPortfolio, getProject } from "../api";
import { useRequest } from "../hooks";

export function PortfolioBreadcrumb({ match }) {
    const { sendRequest, LoadedPortfolio } = useRequest(getPortfolio, Portfolio);

    function Portfolio(portfolio) {
        return (
            <>{portfolio.title}</>
        )
    }

    useEffect(() => {
        sendRequest(match.params.portfolioSlug);
    }, []);

    return <LoadedPortfolio />;
}

export function ProjectBreadcrumb({ match }) {
    const { sendRequest, LoadedProject } = useRequest(getProject, Project);

    useEffect(() => {
        sendRequest(match.params.portfolioSlug, match.params.projectSlug);
    }, []);

    function Project(project) {
        return (
            <>{project.title}</>
        )
    }

    return <LoadedProject />;
}