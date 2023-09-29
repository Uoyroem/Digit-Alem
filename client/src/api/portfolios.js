import { api } from ".";


export async function getPortfolios() {
    return (await api.get("/portfolios")).data;
}