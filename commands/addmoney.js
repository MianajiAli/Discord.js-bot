const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "add-money",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<:pepeno:997843592955580466> **This is only owner command**')
		}
		
		let target = db.get(`userb_${message.author.id}`);

		const ban_error = new Discord.MessageEmbed()
		.setDescription('<:pepeno:997843592955580466> **You are banned from using this section**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}

		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
	
		if (!args[0]) return message.reply('<:pepeno:997843592955580466> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<:pepeno:997843592955580466> **That was not a valid number**')
		
		try{
			let user = message.mentions.users.first() || message.author
			message.channel.send(`<:peppoyes:997843596290052177> **Successfully added ${args[0]} to ${user.tag}**`)
			db.add(`money_${user.id}`, args[0])
		}
		catch(e) {
			return message.channel.send('<:pepeno:997843592955580466> **An error occurred, please try again**');
		}

	}
}