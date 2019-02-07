const commando = require("discord.js-commando");
const discord = require("discord.js");
var request = require("request");

class getDate extends commando.Command {
  constructor(client) {
    super(client, {
      name: "date",
      group: "simple",
      memberName: "date",
      description: "Returns the broadcast date of the twitch VOD"
    });
  }

  async run(message, args) {
    //splits the URL to only get the video ID
    var str = message.argString; //the content of the message
    var res = str.split("videos/");
    var res = res[1].split("?");
    message.channel.sendMessage(str);

    //send request for information on the VOD
    request.get(
      {
        url: `https://api.twitch.tv/kraken/videos/` + res[0],
        headers: { "Client-ID": "su50lo5uiwhqooprwu0xw3hobbxvpd" }
      },
      (err, res, body) => {
        //convert text into a JavaScript object
        let data = JSON.parse(body);

        //the created date for the vod, and the title of the vod
        var outputData = new discord.RichEmbed().setTitle(
          data.channel.name + " | " + data.title
        );
        //formatting for the time
        var secounds = data.length;
        var minutes = Math.floor(secounds / 60);
        var secounds = secounds % 60;
        var hours = Math.floor(minutes / 60);
        var minutes = Math.floor(minutes % 60);
        //add the time to the rich embed
        outputData
          .addField("Length", hours + ":" + minutes + ":" + secounds)
          .addField("Views", data.views);

        //formatting for the created date
        var dateTimeString = data.created_at;
        var timeString = dateTimeString.split("T");
        var brokenTimeString = timeString[0].split("-");

        //add the date to the rich embed
        outputData
          .addField(
            "Date",
            brokenTimeString[0] +
              " " +
              brokenTimeString[1] +
              " " +
              brokenTimeString[2]
          )
          .setColor("0xFFC0CB")
          .setThumbnail(data.thumbnails[1].url);

        message.channel.sendEmbed(outputData);
      }
    );
  }
}

module.exports = getDate;
