import {useState} from "react";
import spinner from "../assets/spinner.svg";
import "./OnResponse.scss";

export function useRequest(requestFunction, onLoaded) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    function sendRequest() {
        setLoaded(false);
        setError(false);
        requestFunction(...arguments)
            .then(response => {
                setData(response.data);
                setLoaded(true);
            })
            .catch(error => {
                console.error(error.message);
                setError(true);
            });
    }

    function OnResponse() {
        return (
            <>
                {error ? <div className="error">Произошло ошибка при загрузке данных см.
                    консоль</div> : loaded ? <>{onLoaded(data)}</> :
                    <img className="loading" src={spinner} alt=""/>}
            </>
        );
    }


    return {sendRequest, OnResponse};
}