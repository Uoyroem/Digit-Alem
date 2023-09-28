import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ProjectPage from "./pages/ProjectPage";


const router = createBrowserRouter([
    {path: "/", element: <IndexPage/>},
    {path: "/projects/:projectSlug", element: <ProjectPage/>}
]);

export default router;