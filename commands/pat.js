const Discord = require('discord.js');
const superagent = require('superagent')
const colors = require('../colors.json')

module.exports = {
    name: "pat",

    async run (client, message, args) {
		if (message.channel.nsfw === false) {
			if (!message.mentions.users.first()) return message.reply("<:pepeno:997843592955580466> **You need to mention the user**");
			const { body } = await superagent
			.get("https://nekos.life/api/pat");
				const pat = new Discord.MessageEmbed()
				.setTitle(`${message.author.username} patted ${message.mentions.users.first().username}`)
				.setImage(body.url)
				.setColor(colors.main)
			  message.channel.send(pat)
		}
	}
}