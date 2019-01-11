const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const token = "NTMyMzE0NjMzNDUzNjk5MDcy.DxbdaQ.IbpOQoly7K7LXBGnl3g1OK8GPnI";

bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("music", "Music");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//when a message is sent
bot.on("message", function(message) {
  if (message.content == "Hello") {
    message.channel.sendMessage("Hello!");
  }
});

//bot logged in
bot.on("ready", () => {
  console.log(console.log("bot has logged on"));
});

//login
bot.login(token);
