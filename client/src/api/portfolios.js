import { api } from ".";


export async function getPortfolios() {
    return await api.get("/portfolios");
}

export async function getPortfolio(slug) {
    return await api.get(`/portfolios/${slug}`)
}