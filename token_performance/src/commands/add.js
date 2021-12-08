//const Coningecko = require("../services/Coingecko")
const logger = require("../utils/logger.js");
const ProjectService = require("../services/ProjectService");
exports.run = async (client, message, args) => {
  const service = new ProjectService();
  console.log(message.author)
  //logger.info(client.name);
};

exports.help = {
  name: "add",
  category: "System",
  description: "add project to tracking list",
  usage: "!add <symbol> <name> <type>",
};
