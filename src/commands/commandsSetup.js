export default function commandsSetup(client) {
    const developmentId = '928638782952079391';
    const guild = client.guilds.cache.get(developmentId)
    return guild ? guild.commands : client.application.commands;
}
