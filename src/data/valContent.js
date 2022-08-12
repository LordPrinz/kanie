import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({});
const api = process.env.API

export default async function getValContent(region, locale) {
    const url = `https://${region}.api.riotgames.com/val/content/v1/contents?${locale != null ? `locale=${locale}&` : ""}api_key=${api}`;
    const response = await fetch(url)
    if (response.status !== 200) {
        return;
    }
    const json = response.json();
    return json;
}