const Discord = require("discord.js");
const colors = require('../colors.json')
module.exports = {
    name: "vote",

    async run (client, message, args) {
		if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('<a:no:997879343999111280> **I do not have the correct permissions | Permission: ADD_REACTIONS**')
		const sayMessage = args.join(" ");
		if (sayMessage.length < 1) return message.channel.send("Write something")
	  const embed = new Discord.MessageEmbed()
	   .setColor(colors.main)
	   .setTitle(`Vote starting by ${message.author.username}`)
	   .setDescription(`> **${sayMessage}**`)
	   .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
	   .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))  
	   .setTimestamp()
		message.channel.send({embed}).then(m => {
			m.react('<:like:997887404339900527>');
			m.react('<:dislike:997887406592241765>');
		})   
	}
}	 