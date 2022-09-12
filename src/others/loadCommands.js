import testCommand from "../commands/ping.js";
import getAgentNames from "../commands/valorant/agentNames.js";
import getLeaderboard from "../commands/valorant/leaderboard.js";

export default function loadCommands(commands) {
    testCommand(commands);
    getAgentNames(commands);
    getLeaderboard(commands);
}