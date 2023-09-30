import { useState } from "react";

export function useRequest(request) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function sendRequest() {
        request(...arguments)
            .then(response => {
                setData(response.data);
                setLoaded(true);
            })
            .catch(error => {
                setError(error.message);
            });
    }

    return { sendRequest, loaded, error, data };
}