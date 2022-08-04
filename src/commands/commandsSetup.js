export default function commandsSetup(client) {
    const developmentId = '928638782952079391';
    const guild = client.guilds.cache.get(developmentId)
    // let commands = client.application.commands;
    let commands;
    if (guild) {
        commands = guild.commands;
    } else {
        commands = client.application.commands
    }
    return commands;
}