const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NTMyMzE0NjMzNDUzNjk5MDcy.DxbdaQ.IbpOQoly7K7LXBGnl3g1OK8GPnI";

//when a message is sent
client.on("message", msg => {
  if (msg.content === "!invite") {
    msg.channel.send("https://discord.gg/v46vM9Q");
  }

  msg.react("☺");
});

//bot logged in
client.on("ready", () => {
  console.log(console.log("bot has logged on"));
});

client.login(token);
