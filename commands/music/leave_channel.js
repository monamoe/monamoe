const commando = require("discord.js-commando");

class LeaveChannelCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "leave",
      group: "music",
      memberName: "leave",
      description: "Leaves voice channel"
    });
  }

  async run(message, args) {
    if (message.guild.voiceConnection) {
      message.guild.voiceConnection.disconnect();
      message.channel.sendMessage("Monamoe has left your voice channel.");
    } else {
      message.reply("I am not in a voice channel.");
    }
  }
}

module.exports = LeaveChannelCommand;
