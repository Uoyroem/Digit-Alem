import { useEffect } from "react";
import { getPortfolio, getProject } from "../api";
import { useRequest } from "../hooks";

export function PortfolioBreadcrumb({ match }) {
    const { sendRequest, loadedComponents } = useRequest(getPortfolio, Portfolio);

    function Portfolio(portfolio) {
        return (
            <>{portfolio.title}</>
        )
    }

    useEffect(() => {
        sendRequest(match.params.portfolioSlug);
    }, []);

    return <>{loadedComponents[Portfolio]()}</>;
}

export function ProjectBreadcrumb({ match }) {
    const { sendRequest, loadedComponents } = useRequest(getProject, Project);

    useEffect(() => {
        sendRequest(match.params.portfolioSlug, match.params.projectSlug);
    }, []);

    function Project(project) {
        return (
            <>{project.title}</>
        )
    }

    return <>{loadedComponents[Project]()}</>;
}