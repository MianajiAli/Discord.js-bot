const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "add-xp",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<a:alert:995652726543355975> **This is only owner command**')
		}

		let user = message.author;

	
		if (!args[0]) return message.reply('<a:alert:995652726543355975> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<a:alert:995652726543355975> **That was not a valid number**')

		message.channel.send(`<a:verify:995645296736481320> **Successfully added ${args[0]} xp to ${user.tag}**`)

		db.add(`level_${message.guild.id}_${user.id}`, args[0])
	}
}
