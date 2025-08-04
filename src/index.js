require("dotenv").config();

const eventHandler = require("./handlers/eventHandler");
const generateImage = require("./generateimage");

const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
  PresenceUpdateStatus,
  Events,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
});

eventHandler(client);

client.login(process.env.TOKEN);
