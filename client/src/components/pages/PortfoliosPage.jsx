import React, {useEffect} from "react";
import {useRequest} from "../../hooks";
import {getPortfolios} from "../../api";
import {NavLink, Outlet} from "react-router-dom";
import "./PortfoliosPage.scss";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import router from "../../router";
import Link from "@mui/material/Link";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Breadcrumbs,
    Container,
    Divider,
    Grid,
    Stack
} from "@mui/material";

function PortfolioLinks(portfolios) {
    return (
        <Stack>
            {portfolios.map(portfolio => (
                <Accordion key={portfolio.slug}>
                    <AccordionSummary>
                        <Link
                            component={NavLink}
                            to={`/portfolios/${portfolio.slug}`}
                            variant="button"
                            underline="hover"
                            color="inherit"
                        >
                            <div>{portfolio.title}</div>
                        </Link>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Stack spacing={2}>
                            {portfolio.projects.map(project => (
                                <Link
                                    component={NavLink}
                                    key={project.slug}
                                    variant="button"
                                    color="inherit"
                                    underline="hover"
                                    to={`/portfolios/${project.portfolioSlug}/projects/${project.slug}`}
                                >
                                    {project.title}
                                </Link>
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    );
}

function PortfoliosPage() {
    const {
        sendRequest,
        loadedComponents
    } = useRequest(getPortfolios, PortfolioLinks);
    const breadcrumbs = useReactRouterBreadcrumbs(router.routes);

    useEffect(() => {
        sendRequest();
    }, []);


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        {breadcrumbs.map(({key, breadcrumb, match}) => (
                            <Link underline="hover" color="inherit" to={match} component={NavLink} key={key}>
                                {breadcrumb}
                            </Link>)
                        )}
                    </Breadcrumbs>
                </Grid>


                <Divider light/>
                <Grid item xs={4}>
                    <aside>
                        {loadedComponents[PortfolioLinks]()}
                    </aside>
                </Grid>
                <Grid item xs={8}>
                    <Outlet/>
                </Grid>

            </Grid>
        </Container>

    );
}

export default PortfoliosPage;