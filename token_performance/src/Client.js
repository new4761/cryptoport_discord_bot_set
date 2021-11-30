const Discord = require("discord.js");
const { readdir, readdirSync } = require('fs');
const { join, resolve } = require('path');
require("dotenv").config();

class Client extends Discord.Client {
  // Aliases, commands and slash commands are put in collections where they can be
  // read from, catalogued, listed, etc.
  commands = new Discord.Collection();
  aliases = new Discord.Collection();
  slashcmds = new Discord.Collection();

  /**
   * Loads all available events
   * @param {string} path
   */
  loadEvents(path) {
    readdir(path, (err, files) => {
      if (err) this.logger.error(err);
      files = files.filter((f) => f.split(".").pop() === "js");
      if (files.length === 0) return this.logger.warn("No events found");
     console.log(`${files.length} event(s) found...`);
       files.forEach((f) => {
         const eventName = f.substring(0, f.indexOf("."));
         const event = require(resolve(join(path, f)));
         super.on(eventName, event.bind(null, this));
        // delete require.cache[
        //   require.resolve(resolve(baseDir , join(path, f)))
        // ]; // Clear cache
        console.log(`Loading event: ${eventName}`);
       });
    });
    return this;
  }

  //loadCommand() {}
}

module.exports = Client;
