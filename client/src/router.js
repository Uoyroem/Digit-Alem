import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import App from "./App";
import { getPortfolios } from "./api";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <IndexPage />
            },
            {
                path: "/portfolios/:portfolioSlug",
                element: <PortfolioPage />,
                async loader() {
                    const portfolios = await getPortfolios();
                    return { portfolios }
                }
            }
        ]
    },

]);

export default router;