const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "roll",
      group: "simple",
      memberName: "roll",
      description: "rolls a number between 1 and 6"
    });
  }

  async run(message, args) {
    var chance = Math.floor(Math.random() * 7);

    message.channel.sendMessage(chance);
  } //ends async
} //ends class

module.exports = DiceRollCommand;
