import { useParams } from "react-router-dom";
import { getPortfolio } from "../../api";
import { useRequest } from "../../hooks";
import "./PortfolioDetailPage.scss";
import { useEffect } from "react";
import HTMLFromURL from "../HTMLFromURL";


function PortfolioDetailPage() {
    const { portfolioSlug } = useParams();

    function Portfolio(portfolio) {
        return (
            <div className="portfolio-detail-page__portfolio">
                <div className="portfolio-detail-page__portfolio-image-and-title"
                    style={{ backgroundImage: `url(${portfolio.imageUrl})` }}>
                    <h1>{portfolio.title}</h1>
                </div>
                <HTMLFromURL url={portfolio.htmlDescriptionUrl} />
            </div>
        );
    }


    const { sendRequest, loadedComponents } = useRequest(getPortfolio, Portfolio);


    useEffect(() => {
        sendRequest(portfolioSlug);
    }, [portfolioSlug]);
    return (
        <div className="portfolio-detail-page">
            {loadedComponents[Portfolio]()}
        </div>
    );
}


export default PortfolioDetailPage;