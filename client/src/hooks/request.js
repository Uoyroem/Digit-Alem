import { useState } from "react";
import spinner from "../assets/spinner.svg";
import "./OnResponse.scss";


export function useRequest(request, ...components) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const loadedComponents = {};

    function sendRequest() {
        setLoaded(false);
        setError(false);
        request(...arguments)
            .then(response => {
                setData(response.data);
                setLoaded(true);
            })
            .catch(error => {
                console.error(error.message);
                setError(true);
            });
    }

    for (const component of components) {
        loadedComponents[component] = function () {
            return (
                <>
                    {error ? <div className="error">Произошло ошибка при загрузке данных см.
                        консоль</div> : loaded ? <>{component(data)}</> :
                        <img className="loading" src={spinner} alt="" />}
                </>
            );
        };
    }


    return { sendRequest, loadedComponents };
}