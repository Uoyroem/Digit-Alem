import { useEffect } from "react";
import { getPortfolio } from "../api";
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

    return (
        <LoadedPortfolio />
    );
}
