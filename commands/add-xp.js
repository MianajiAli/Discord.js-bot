const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "add-xp",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<a:no:997879343999111280> **This is only owner command**')
		}

		let user = message.author;

	
		if (!args[0]) return message.reply('<a:no:997879343999111280> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<a:no:997879343999111280> **That was not a valid number**')

		message.channel.send(`<a:yes:997879349170684064> **Successfully added ${args[0]} xp to ${user.tag}**`)

		db.add(`level_${message.guild.id}_${user.id}`, args[0])
	}
}
