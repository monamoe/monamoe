const commando = require("discord.js-commando");
const YTDL = require("ytdl-core");

function Play(connection, message) {
  var server = server[message.guild.id];
  server.dispatcher = connection.playStream(
    YTDL(server.queue[0], { filter: "audioonly" })
  );
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) {
      Play(connection, message);
    } else {
      connection.disconnect();
    }
  });
}

class JoinChannelCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "join",
      group: "music",
      memberName: "join",
      description: "Followes the user into a voice channel"
    });
  }

  async run(message, args) {
    if (message.member.voiceChannel) {
      if (!message.guild.voiceConnection) {
        if (!servers[message.guild.id]) {
          servers[message.guild.id] = { queue: [] };
        }
        message.member.voiceChannel.join().then(connetion => {
          message.channel.sendMessage("Monamoe has joined your voice channel.");
          var server = servers[message.guild.id];
          server.queue.push(args);
          Play(connection, message);
        });
      }
    } else {
      message.reply("You are not in a voice channel");
    }
  }
}

module.exports = JoinChannelCommand;
