import dotenv from "dotenv";
import getValContent from "./../../data/valContent.js"
dotenv.config({});

export default async function agentNamesInter(interaction, region, locale) {
    const valContent = await getValContent(region, locale);
    if (!valContent) {
        interaction.reply({
            content: "Something went wrong. Please try again later.",
            ephemeral: true,
        })
        return;
    }

    const agents = [];
    const characters = valContent.characters
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