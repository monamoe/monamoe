const commando = require("discord.js-commando");

class AvatarCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "avatar",
      group: "simple",
      memberName: "avatar",
      description: "Get the users profile avatar."
    });
  }

  async run(message, args) {
    message.channel.sendMessage(message.author.avatarURL);
  }
}

module.exports = AvatarCommand;
