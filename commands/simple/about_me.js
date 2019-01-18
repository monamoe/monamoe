const commando = require("discord.js-commando");
const discord = require("discord.js");

class AboutMeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "info",
      group: "simple",
      memberName: "info",
      description: "Info about me!"
    });
  }

  async run(message, args) {
    var myInfo = new discord.RichEmbed()
      .setTitle("Monamoe | lordfireriser")
      .addField("Twitter", "https://twitter.com/lordfireriser")
      .addField("Soundcloud Alt", "https://soundcloud.com/lordfireriser")
      .addField("Soundcloud", "https://soundcloud.com/monamoe")
      .addField("Twitch", "https://twitch.tv/lordfireriser")
      .setColor("0xFFC0CB")
      .setThumbnail("https://i.ytimg.com/vi/aVFrSejPFQY/maxresdefault.jpg");

    message.channel.sendEmbed(myInfo);
  }
}

module.exports = AboutMeCommand;
