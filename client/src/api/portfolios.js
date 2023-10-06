import { api } from "../api";


export async function getPortfolios() {
    return await api.get("/portfolios");
}

export async function getPortfolio(slug) {
    return await api.get(`/portfolios/${slug}`)
}

export async function getProject(portfolioSlug, slug) {
    return await api.get(`/portfolios/${portfolioSlug}/projects/${slug}`)
}