const Discord = require('discord.js');
const superagent = require('superagent')
const colors = require('../colors.json')

module.exports = {
    name: "thigh",

    async run (client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'thigh'})
			.end((err, response) => {
				const thigh = new Discord.MessageEmbed()
				.setTitle('Enjoy :smiling_imp:')
				.setImage(response.body.message)
				.setColor(colors.main)
			  message.channel.send(thigh)
			});
		  } else {
			message.channel.send("<a:no:997879343999111280> **This isn't NSFW channel**")
		}
	}
}