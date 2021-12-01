const Client = require('./src/Client.js');
const { Intents } = require('discord.js');
const Coningecko = require('./src/services/Coningecko.js')
require("dotenv").config();



const intents = new Intents();


const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });


//start up discord bot
const init =async ()  =>{
    console.log("Starting crypto price bot")
   await client.loadEvents('./src/events');
   await client.loadCommands('./src/commands');
    client.login(process.env.BOT_TOKEN);
}

const test =()=>{
 const Coningecko = new Coningecko();
 Coningecko.getCoinNameFromSymbol("bnb");
}
test();
//init();



// if there are errors, log them
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
	.on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
	.on("error", (e) => client.logger.log(e, "error"))
	.on("warn", (info) => client.logger.log(info, "warn"));