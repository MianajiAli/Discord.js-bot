const Discord  =require("discord.js")
const fetch = require("node-fetch");
const canvacord = require("canvacord");

module.exports = {
  name: 'spank',
  run : async (client, message, args) => {
      const user = message.mentions.users.first();
	  if(!user) {
		  return message.channel.send('<:pepeno:997843592955580466> **Please mention a user**')
	  }
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let avatar1 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let image = await canvacord.Canvas.spank(avatar, avatar1);
      let attachment = new Discord.MessageAttachment(image, "spank.png");
      return message.channel.send(attachment);

}
}
