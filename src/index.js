import {
  Client,
  Intents
} from "discord.js";
import dotenv from "dotenv";
import commandsSetup from "../src/commands/commandsSetup.js";
import pingInteraction from "../src/interactions/pingInteraction.js";
import agentNamesInter from "./interactions/valorant/agentNamesInter.js";
import leaderboardInter from "./interactions/valorant/leaderboardInter.js";
import loadCommands from "./others/loadCommands.js"
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
  loadCommands(commands);
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
  } else if (commandName === 'agents') {
    const region = options.getString('region');
    const locale = options.getString('locale');
    agentNamesInter(interaction, region, locale);
  } else if (commandName === 'leaderboard') {
    const region = options.getString('region');
    const size = options.getNumber('size') || 20;
    if (size < 1 || size > 30) {
      interaction.reply({
        content: `Invalid size '${size}'. Valid values: 1 to 30`,
        ephemeral: true
      });
      return;
    }
    const startindex = options.getNumber('startindex') || 0;
    if (startindex < 0) {
      interaction.reply({
        content: `Invalid start index '${startindex}'.`,
        ephemeral: true
      })
      return;
    }
    await leaderboardInter(interaction, region, size, startindex);
  }
});

client.login(process.env.TOKEN);