import {useParams} from "react-router-dom";
import {getPortfolio} from "../../api";
import {useRequest} from "../../hooks";
import "./PortfolioDetailPage.scss";
import {useEffect} from "react";


function PortfolioDetailPage() {
    const {portfolioSlug} = useParams();

    function Portfolio(portfolio) {
        return (
            <div className="portfolio-detail-page__portfolio">
                <div className="portfolio-detail-page__portfolio-image-and-title"
                     style={{backgroundImage: `url(${portfolio.imageUrl})`}}>
                    <h1>{portfolio.title}</h1>
                </div>
                <iframe src={portfolio.htmlDescriptionUrl}></iframe>
            </div>
        );
    }


    const {sendRequest, LoadedPortfolio} = useRequest(getPortfolio, Portfolio);


    useEffect(() => {
        sendRequest(portfolioSlug);
    }, [portfolioSlug]);
    return (
        <div className="portfolio-detail-page">
            <LoadedPortfolio/>
        </div>
    );
}


export default PortfolioDetailPage;