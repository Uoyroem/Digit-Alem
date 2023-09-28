import "./Main.scss";
import {RouterProvider} from "react-router-dom";
import router from "./router";

function Main(props) {

    return (
        <main {...props}>
            <RouterProvider router={router}/>
        </main>
    );
}

export default Main;