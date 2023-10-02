import { useEffect } from "react";
import { useRequest } from "../hooks";


function HTMLFromURL({ url }) {
    const { sendRequest, LoadedHTML } = useRequest(async () => {
        const response = await fetch(url);
        const html = await response.text();
        return { data: html };
    }, HTML);

    function HTML(html) {
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }

    useEffect(() => {
        sendRequest();
    }, []);

    return <LoadedHTML />;
}


export default HTMLFromURL;