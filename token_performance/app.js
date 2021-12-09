const Client = require("./src/client.js");
const { Intents } = require("discord.js");
const logger = require("./src/utils/logger");


require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//start up discord bot
const init = async () => {
  logger.log("Starting crypto price bot");
  await client.loadEvents("./src/events");
  await client.loadCommands("./src/commands");
  client.login(process.env.BOT_TOKEN);
};

//connect_db()
init();

// if there are errors, log them
client
  .on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
  .on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
  .on("error", (e) => client.logger.err(e, "error"))
  .on("warn", (info) => client.logger.log(info, "warn"));
