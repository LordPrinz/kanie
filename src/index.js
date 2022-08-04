import {
  Client,
  Intents
} from "discord.js";
import dotenv from "dotenv";
import testCommand from "./commands/ping.js";
import commandsSetup from "../src/commands/commandsSetup.js";
import pingInteraction from "../src/interactions/pingInteraction.js";
dotenv.config({});

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.on("ready", () => {
  console.log("Bot is now working");
  const commands = commandsSetup(client);
  testCommand(commands);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const {
    commandName,
    options
  } = interaction;
  if (commandName === 'ping') {
    pingInteraction(interaction);
  }
})

client.login(process.env.TOKEN);