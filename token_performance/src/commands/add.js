//const Coningecko = require("../services/Coingecko")
const logger = require("../utils/logger.js");
const ProjectService = require("../services/projectService");
const MissingArgsError = require("../exception/missingArgsError");

exports.run = async (client, message, args) => {
  try {
    const service = new ProjectService();
    if (args.length < 4) {
      throw new MissingArgsError(this.help.usage);
    }
    message
      .reply(await service.add_project(message.author.username, args))
      .catch(logger.error);
  } catch (err) {
    logger.error(`${message.author.username} : ${err}`);
    message.reply(`${err.message}`).catch(logger.error);
  }
};

exports.help = {
  name: "add",
  category: "System",
  description: "add project to tracking list",
  usage: "!add <symbol> <name> <chain> <type>",
};
