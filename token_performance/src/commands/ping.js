exports.run = (client, message, args) => {
    //console.log(args)
    message.channel.send(`pong! ${args}`).catch(console.error);
}

exports.help = {
    name: "ping",
    category: "System",
    description: "View or change settings for your server.",
    usage: "set <view/get/edit> <key> <value>"
  };