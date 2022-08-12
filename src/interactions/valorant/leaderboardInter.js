import getValContent from "./../../data/valContent.js";
import getValRanked from "./../../data/valRanked.js";

export default async function leaderboardInter(interaction, region, size, startindex) {
    await interaction.deferReply({})

    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })

    const valContent = await getValContent(region, null);

    if (!valContent) {
        await interaction.editReply({
            content: "Something went wrong. Please try again later.",
        })
        return;
    }

    const acts = valContent.acts
    const activeAct = acts.find(acts => acts.isActive === true && acts.type === 'act');
    const activeActId = activeAct.id;
    const valRanked = await getValRanked(activeActId, size, startindex, region);

    if (!valRanked) {
        await interaction.editReply({
            content: "Something went wrong. Please try again later.",
        })
        return;
    }

    const players = valRanked.players;
    const totalPlayers = valRanked.totalPlayers;
    let message = `Total players - ${totalPlayers}\n`
    players.map((player) => {
        const tier = player.competitiveTier;
        let rank;
        switch (tier) {
            default:
                rank = `Competitive tier - ${tier}`;
                break;
            case 27:
                rank = "Radiant";
                break;
            case 26:
                rank = "Immo 3";
                break;
            case 25:
                rank = "Immo 2";
                break;
            case 24:
                rank = "Immo 1";
                break;
        }
        message += `\n#${player.leaderboardRank} - ${player.gameName ? `${player.gameName}#` : "Anonymous"}${player.tagLine ? player.tagLine : ""}\nRank - ${rank}\nRR - ${player.rankedRating}\nNumber of wins - ${player.numberOfWins}\n`;
    })

    if (message.length > 2000) {
        await interaction.editReply({
            content: `Too many characters (${message.length}). Try to lower the size.`,
        })
        return;
    }

    await interaction.editReply({
        content: message,
    })
}