const Client = require('./src/Client.js');
const { Intents } = require('discord.js');

require("dotenv").config();



const intents = new Intents();


const client = new Client({ intents: intents});


//start up discord bot
const init = () =>{
    console.log("Starting crypto price bot")
    client.loadEvents('./src/events');
    //client.loadCommands('./src/commands');
    client.login(process.env.BOT_TOKEN);
}

init();



// if there are errors, log them
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
	.on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
	.on("error", (e) => client.logger.log(e, "error"))
	.on("warn", (info) => client.logger.log(info, "warn"));