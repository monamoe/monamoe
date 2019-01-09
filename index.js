// Discord.js bot
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const token = "NTMyMzE0NjMzNDUzNjk5MDcy.DxbdaQ.IbpOQoly7K7LXBGnl3g1OK8GPnI";

client.on("ready", () => {
  client.user.setActivity("https://git.io/d.js-heroku", { type: "WATCHING" });
});

client.on("message", msg => {
  if (!msg.content.startsWith(prefix) || !msg.guild) return;

  const command = msg.content.split(" ")[0].substr(1);

  const args = msg.content
    .split(" ")
    .slice(1)
    .join(" ");

  //bot response
  if (command === "ping") return msg.channel.send("pong");
  else if (command === "invite")
    return msg.channel.send("join here discord.gg/test");
});

client.login(token);
