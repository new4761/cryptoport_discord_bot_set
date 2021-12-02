const Discord = require("discord.js");
const { readdir, readdirSync } = require('fs');
const { join, resolve } = require('path');
const logger = require("./utils/logger.js");
require("dotenv").config();

class Client extends Discord.Client {
  // Aliases, commands and slash commands are put in collections where they can be
  // read from, catalogued, listed, etc.
  commands = new Discord.Collection();
  aliases = new Discord.Collection();
  slashcmds = new Discord.Collection();
 // test = new Discord.Message
  /**
   * Loads all available events
   * @param {string} path
   */
  async loadEvents(path) {
    readdir(path, (err, files) => {
      if (err) console.error(err);
      files = files.filter((f) => f.split(".").pop() === "js");
      if (files.length === 0) return logger.warn("No events found");
      logger.info(`${files.length} event(s) found...`);
       files.forEach((f) => {
         const eventName = f.substring(0, f.indexOf("."));
         const event = require(resolve(join(path, f)));
         super.on(eventName, event.bind(null, this));
         delete require.cache[
           require.resolve(resolve(join(path, f)))
         ]; // Clear cache
         logger.info(`Loading event: ${eventName}`);
       });
    });
    return this;
  }
  
  /**
   * Loads all available commands
   * @param {string} path 
   */
   async loadCommands(path) {
    logger.info('Loading commands...');
    const commands = readdirSync(path).filter(file => file.endsWith(".js"));
    // Loop over the Command files
    commands.forEach((file) => {

      // Require the file
      const command = require(resolve(join(path,file)));
      // get name of command form command helper
      logger.log(`Attempting to load command ${command.help.name}`);
      // Set the command to a collection
      this.commands.set(command.help.name, command);
    })
    return this;
  }
}

module.exports = Client;
