const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "", 

    async run (client, message, args) {
      let user = message.mentions.users.first() || message.author
      let bal = await db.fetch(`money_${user.id}`)

    if (bal === null) bal = 0;


    const embed = new Discord.MessageEmbed()
		.setColor(color.main)
		.setTitle(` of ${user.tag}`)
		.addField("", `**${(bal).toLocaleString()} 🪙**`)
		.setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
		return message.channel.send(embed);

    
	}
}