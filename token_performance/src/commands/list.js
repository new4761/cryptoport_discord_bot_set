//const Coningecko = require("../services/Coingecko")
const logger = require("../utils/logger.js");
const ProjectService = require("../services/ProjectService");
exports.run = async (client, message, args) => {
  const service = new ProjectService();
  service.count_project().then((data) => {
    message.reply(`${data}`).catch((err) => logger.error(err));
  });
};

exports.help = {
  name: "list",
  category: "System",
  description: "get list project currently tracking",
  usage: "!list {type}",
};
