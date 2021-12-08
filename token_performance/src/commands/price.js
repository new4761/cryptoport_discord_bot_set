const Coningecko = require("../services/Coingecko")
//const logger = require("../utils/logger.js");
exports.run = async (client, message, args) => {
    let coningecko = new Coningecko();
    if(args.length==0) {
        await message.reply({ content: `please specify coin name from coingecko list => ${coningecko.get_coin_api_list_url()}`});
        return;
    }
    message.reply(await coningecko.get_price(args[0],args[1])).catch(console.error);
}


exports.help = {
    name: "price",
    category: "price",
    description: "get coin price details",
    usage: "!price <coinname> {currency}"
  };