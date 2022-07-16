const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "add-money",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<a:alert:995652726543355975> **This is only owner command**')
		}
		
		let target = db.get(`userb_${message.author.id}`);

		const ban_error = new Discord.MessageEmbed()
		.setDescription('<a:no:863733318809812992> **You are banned from using this section**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}

		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
	
		if (!args[0]) return message.reply('<a:alert:995652726543355975> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<a:alert:995652726543355975> **That was not a valid number**')
		
		try{
			let user = message.mentions.users.first() || message.author
			message.channel.send(`<a:verify:995645296736481320> **Successfully added ${args[0]} to ${user.tag}**`)
			db.add(`money_${user.id}`, args[0])
		}
		catch(e) {
			return message.channel.send('<a:alert:995652726543355975> **An error occurred, please try again**');
		}

	}
}