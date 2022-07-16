const colors = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db');
const { token, default_prefix } = require('../config.json');


module.exports = {
    name: "premium",

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
		const embed = new Discord.MessageEmbed()
		 .setTitle('Premium Commands')
		 .setDescription(`**Do you want premium? [Click Here](https://devevilbot.xyz/devevil-plus)**`)
		 .addField(':trophy: Add XP', ``, true)
		 .addField(':trophy: Set Rank Card Background', ``)
		 .addField(':trophy: Set Profile Card Background', ``)
		 .addField(':currency_exchange: Add Money', ``)
		 .addField(':currency_exchange: Remove Money', ``)
		 .addField('<:verify:836158287107063848> Verification System', ``, true)
		 .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		 .setColor(colors.main)
		 message.channel.send(embed)
	} 
}