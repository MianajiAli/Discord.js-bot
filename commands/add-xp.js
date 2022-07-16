const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "add-xp",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<:pepeno:997843592955580466> **This is only owner command**')
		}

		let user = message.author;

	
		if (!args[0]) return message.reply('<:pepeno:997843592955580466> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<:pepeno:997843592955580466> **That was not a valid number**')

		message.channel.send(`<:peppoyes:997843596290052177> **Successfully added ${args[0]} xp to ${user.tag}**`)

		db.add(`level_${message.guild.id}_${user.id}`, args[0])
	}
}
