import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({});
const api = process.env.API;

export default async function getValRanked(activeActId, size, startindex, region) {
    const url = `https://${region}.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${activeActId}?${size ? `size=${size}&` : ""}${startindex ? `startIndex=${startindex}&` : ""}api_key=${api}`;
    const response = await fetch(url);
    if (response.status !== 200) {
        return;
    }
    const json = response.json();
    return json;
}