const Command = require('../../base/Command.js');
const { CELESTIA_INVITE_LINK } = process.env;

class Invite extends Command {
  constructor(client) {
    super(client, {
      name: "nitro",
      description: "Generates an nitro gift.",
      category: "searches",
      usage: "nitro",
      aliases: ["add"]
    });
  }

  async run(message) { 
    message.channel.send(`🔗 | https://discordgift.site/5nyvx6c84XQNxblq`);
  }
}

module.exports = Invite;