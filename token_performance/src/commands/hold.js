//const Coningecko = require("../services/Coingecko")
const logger = require("../utils/logger.js");
const ProjectService = require("../services/ProjectService");

const Bitquery  =require("../services/Bitquery");
exports.run = async (client, message, args) => {
  const service = new Bitquery();
  service.get_holder_count().then((data) => {
    message.reply(`${data}`).catch((err) => logger.error(err));
  });
};

exports.help = {
  name: "holder",
  category: "tracking",
  description: "get count holder address",
  usage: "!hole {type}",
};
