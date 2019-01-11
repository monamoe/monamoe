const commando = require("discord.js-commando");

class CoinFlipCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "flip",
      group: "simple",
      memberName: "flip",
      description: "Flips a coin"
    });
  }

  async run(message, args) {
    var chance = Math.floor(Math.random() * 2);
    if (chance == 1) {
      message.channel.sendMessage("Heads.");
    } else {
      message.channel.sendMessage("Tails.");
    }
  }
}

module.exports = CoinFlipCommand;
