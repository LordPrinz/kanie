export default function pingInteraction(interaction) {
    interaction.reply({
        content: 'pong',
        ephemeral: true
    })
}