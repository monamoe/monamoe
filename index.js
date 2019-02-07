const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const token = "NTMyMzE0NjMzNDUzNjk5MDcy.DxbdaQ.IbpOQoly7K7LXBGnl3g1OK8GPnI";
var api = require("twitch-api-v5");
api.clientID = "Twitch app client-id";

bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("music", "Music");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};

//when a message is sent
bot.on("message", function(message) {
  if (
    message.content == "hey" ||
    message.content == "hello" ||
    message.content == "hi"
  ) {
    message.channel.sendMessage("Hello!");
  }

  if (
    message.content.split(" ", 2) == "GOOD NIGHT" ||
    message.content == "GOODNIGHT"
  ) {
    message.channel.sendMessage("test");
    message.react("👋");
    message.react("😴 ");
  }

  if (message.content == ":NaM:") {
    message.react("🈹");
    message.react("🈴");
    message.react("🈯");
    message.react("🈷");
    message.react("🈶");
    message.react("🈺");
    message.react("🈲");
    message.react("🈸");
    message.react("🈳");
    message.react("🈚");
    message.react("🈵");
  }
});

//bot logged in
bot.on("ready", () => {
  console.log(console.log("bot has logged on"));
});

//login
bot.login(token);
