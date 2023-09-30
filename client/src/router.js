import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import App from "./App";
import PortfoliosPage from "./components/pages/PortfoliosPage";
import PortfolioDetailPage from "./components/pages/PortfolioDetailPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <IndexPage/>,
                breadcrumb: "Главная"
            },
            {
                path: "portfolios",
                element: <PortfoliosPage/>,
                children: [
                    {
                        path: "/",
                        breadcrumb: "Портфолио",

                    },
                    {
                        path: "/:portfolioSlug",
                        element: <PortfolioDetailPage/>
                    }
                ]
            }
        ]
    },

]);

export default router;