import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks";
import { getProject } from "../../api";
import HTMLFromURL from "../HTMLFromURL";
import { useEffect } from "react";

function ProjectPage() {
    const params = useParams();

    const { sendRequest, LoadedProject } = useRequest(getProject, Project)

    useEffect(() => {
        sendRequest(params.portfolioSlug, params.projectSlug);
    }, []);

    function Project(project) {
        return <HTMLFromURL url={project.htmlDescriptionUrl} />
    }

    return <LoadedProject />
}

export default ProjectPage;