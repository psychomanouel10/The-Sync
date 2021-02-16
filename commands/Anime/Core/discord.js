const { Invite } = require('discord.js');
const Command = require('../../base/Command.js');

class invite extends Command {
  constructor(client) {
    super(client, {
      name: "support",
      description: "Generates an invite link, for adding you to the support server.",
      category: "Core",
      usage: "support server",
      aliases: ["add"]
    });
  }

  async run(message) { 
    message.channel.send(`🔗 | https://discord.gg/4fRSbrkbNK `);
  }
}

module.exports = invite;