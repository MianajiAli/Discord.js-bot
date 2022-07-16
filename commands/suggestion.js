const Discord = require("discord.js");
const colors = require('../colors.json')
module.exports = {
    name: "suggest",

    async run (client, message, args) {
		if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('<:pepeno:997843592955580466> **I do not have the correct permissions | Permission: ADD_REACTIONS**')
		const sayMessage = args.join(" ");
		if (sayMessage.length < 1) return message.channel.send("<:pepeno:997843592955580466> **Didn't provide a suggestion**")
	  const embed = new Discord.MessageEmbed()
	   .setColor(colors.main)
	   .addField("Suggestion:", `**${sayMessage}**`)
	   .setTitle("Suggestion by " + message.author.username, message.author.avatarURL)
	   .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
	   .setTimestamp()
		message.channel.send({embed}).then(m => {
		   m.react('👍');
		   m.react('👎');
		})   
		message.delete()
	}
}	 