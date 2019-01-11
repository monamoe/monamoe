const commando = require("discord.js-commando");

class JoinChannelCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "join",
      group: "music",
      memberName: "join",
      description: "Followers the user into a voice channel"
    });
  }

  async run(message, args) {}
}

module.exports = JoinChannelCommand;
