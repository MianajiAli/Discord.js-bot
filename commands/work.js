const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms")
const talkedRecently = new Set();
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "work",

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;

		let target = db.get(`userb_${message.author.id}`);

		const ban_error = new Discord.MessageEmbed()
		.setDescription('<:pepeno:997843592955580466> **You are banned from using this section**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}

		if (talkedRecently.has(message.author.id)) {
			message.reply("**You have to wait 2 hours**");
		} else {
			if (args[0] == 'bodyguard') {

				let amount = Math.floor(Math.random() * 500) + 1;
		
				let embed = new Discord.MessageEmbed()
				.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
				.setDescription(`**${message.author}, you worked as a bodyguard and got payed ${amount} 🪙 for protecting your boss**`)
				.setColor(color.main)
				
			
				message.channel.send(embed)
				db.add(`money_${message.author.id}`, amount)
				talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7.2e+6);
			} else {
				if(args[0] == 'constructor') {
					let amount = Math.floor(Math.random() * 500) + 1; 
			
					let embed = new Discord.MessageEmbed()
					.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
					.setDescription(`**${message.author}, you worked as a constructor and got payed ${amount} 🪙 for rebuilding the burj al khalifa building**`)
					.setColor(color.main)
					
				
					message.channel.send(embed)
					db.add(`money_${message.author.id}`, amount)
					talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7.2e+6);
	} else {
		if(args[0] == 'programmer') {
			let amount = Math.floor(Math.random() * 500) + 1; 
	
			let embed = new Discord.MessageEmbed()
			.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
			.setDescription(`**${message.author}, you worked as a programmer for cd projekt red, you fixed CyberPunk2077 bugs & earned ${amount} 🪙**`)
			.setColor(color.main)
			 
		
			message.channel.send(embed)
			db.add(`money_${message.author.id}`, amount)
			talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 7.2e+6);
	} else {
		if (message.content.toLowerCase() === `${prefix}work`) {
			let embed19 = new Discord.MessageEmbed()
				.setColor(color.main)
				.setDescription(`**Missing Arguments \n \`bodyguard , constructor , programmer\` \n Example : \`${prefix}work programmer\`**`)
			return message.channel.send(embed19)
		}
	}
	} 
			}
		}
	}
}