import React, {useEffect} from "react";
import {useRequest} from "../../hooks";
import {getPortfolios} from "../../api";


function PortfolioListPage() {
    const {sendRequest, LoadedPortfolioList} = useRequest(getPortfolios, PortfolioList);

    function PortfolioList(portfoilos) {
        return (
            <>
                {portfoilos.map(portfoilo => (<div key={portfoilo.id}>{portfoilo.title}</div>))}
            </>
        );
    }

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <div>
            <LoadedPortfolioList/>
        </div>
    );
}

export default PortfolioListPage;