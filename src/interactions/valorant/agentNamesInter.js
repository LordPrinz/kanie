import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config({});

const api = process.env.API;

export default async function agentNamesInter(interaction, region, locale) {
    const url = `https://${region}.api.riotgames.com/val/content/v1/contents?locale=${locale}&api_key=${api}`;
    const response = await fetch(url);

    if (response.status !== 200) {
        interaction.reply({
            content: `Something went wrong (error ${response.status})`,
            ephemeral: true
        });
        return;
    }

    const json = await response.json();
    const agents = [];
    const characters = json.characters
    for (let index in characters) {
        if (!agents.includes(characters[index].name)) {
            agents.push(characters[index].name);
        }
    }

    agents.pop(agents.length)
    let msgContent = "";

    agents.map((agent) => {
        msgContent += `${agent}\n`
    })

    interaction.reply({
        content: msgContent,
        ephemeral: true
    });
}