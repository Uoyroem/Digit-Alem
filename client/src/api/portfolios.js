import { api } from ".";


export async function get_portfolios() {
    api.get("/portfolios")
}